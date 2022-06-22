import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { Izvestaj } from '../izvestaj';
import { IzvestajService } from '../izvestaj.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  izvestaj: Izvestaj = {
    id: -1,
    // id_klijenta: null,
    // id_korisnika: -1,
    // domen: '', 
    // datum_start: '', 
    // datum_end: '', 
    // napomena: ''
  };
  izvestajForm: FormGroup;
  action = "";
  isReadOnly: boolean = false;
  matcher = new MyErrorStateMatcher();


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public izvestajService: IzvestajService,
    private _location: Location
  ) {
    this.izvestajForm = this.fb.group({
    })
  }


  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[1].path;
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[2]) {
      this.izvestajService.find(this.activatedRoute.snapshot.url[2].path).subscribe(res => {
        this.izvestaj = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.izvestajService.store(this.izvestajForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.izvestajForm, error)}
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.izvestajService.update(this.izvestaj.id, this.izvestajForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.izvestajForm, error)}
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.izvestajService.delete(this.izvestaj.id).subscribe({
      next: res => { this.router.navigateByUrl('/domeni/home') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.izvestajForm, error)}
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
