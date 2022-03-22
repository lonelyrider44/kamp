import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kamp } from '../kamp';
import { KampService } from '../kamp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  kamp: Kamp = {
    id: -1,
    lokacija_id: '',
    naziv: '',
    godina: '',
    broj_prijava: '',
    status: '',
    cena: ''
  };
  kampForm: FormGroup;
  action = "";
  isReadOnly: boolean = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kampService: KampService,
    private _location: Location
  ) {
    this.kampForm = this.fb.group({
      lokacija_id: [''],
      naziv: [''],
      godina: [''],
      broj_prijava: [''],
      status: [''],
      cena: ['']
    })
  }


  ngOnInit(): void {
    
    this.action = this.activatedRoute.snapshot.url[0].path;
    // console.log(this.activatedRoute.snapshot);
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[1]) {
      this.kampService.find(this.activatedRoute.snapshot.url[2].path).subscribe(res => {
        this.kamp = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.kampService.store(this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.kampService.update(this.kamp.id, this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.kampService.delete(this.kamp.id).subscribe({
      next: res => { this.router.navigateByUrl('/kamp') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
    })
  }
  submitForm() {
    this.store();
    this.update();
    this.delete();
  }
  submitFormFailed(form: FormGroup, error: HttpErrorResponse) {
    // this.errors = error.error.errors;
    if (error.status === 422) {
      Object.keys(error.error.errors).forEach(prop => {
        const formControl = form.get(prop);
        if (formControl) {
          // activate the error message
          formControl.setErrors({
            serverError: error.error.errors[prop]
          });
        }
      });
    }
  }
  goBack() {
    this._location.back();
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}