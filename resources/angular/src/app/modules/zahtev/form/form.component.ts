import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zahtev } from '../zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  zahtev: Zahtev = {
    id: -1,
    // id_klijenta: null,
    // id_korisnika: -1,
    // domen: '', 
    // datum_start: '', 
    // datum_end: '', 
    // napomena: ''
  };
  zahtevForm: FormGroup;
  action = "";
  isReadOnly: boolean = false;
  matcher = new MyErrorStateMatcher();


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public zahtevService: ZahtevService,
    private _location: Location
  ) {
    this.zahtevForm = this.fb.group({
    })
  }


  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[1].path;
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[2]) {
      this.zahtevService.find(this.activatedRoute.snapshot.url[2].path).subscribe(res => {
        this.zahtev = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.zahtevService.store(this.zahtevForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error)}
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.zahtevService.update(this.zahtev.id, this.zahtevForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error)}
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.zahtevService.delete(this.zahtev.id).subscribe({
      next: res => { this.router.navigateByUrl('/domeni/home') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error)}
    })
  }
  submitForm() {
    this.store();
    this.update();
    this.delete();
  }

  submitFormFailed(form: FormGroup, error: HttpErrorResponse){
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
