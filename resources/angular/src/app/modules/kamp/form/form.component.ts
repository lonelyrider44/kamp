import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Kamp, kampFormGroup, newKamp } from '../kamp';
import { KampService } from '../kamp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  kamp: Kamp = newKamp();
  kampForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kampService: KampService,
    private _location: Location
  ) {
    this.kampForm = kampFormGroup(this.fb, this.kamp);
  }

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  store() {
    if (!this.action_create) return;

    console.log(this.kampForm.getRawValue());
    // return;
    this.kampService.store(this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.kampService.update(this.kamp.id, this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
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
  loadFromUrl(){
    this.action_create = this.activatedRoute.snapshot.url.map((value: UrlSegment, index:number, array: UrlSegment[])=>{
      return value.path;
    }).includes('unos');
    this.action_update = this.activatedRoute.snapshot.url.map((value: UrlSegment, index:number, array: UrlSegment[])=>{
      return value.path;
    }).includes('izmena');
    this.action_delete = this.activatedRoute.snapshot.url.map((value: UrlSegment, index:number, array: UrlSegment[])=>{
      return value.path;
    }).includes('brisanje');
    if (this.activatedRoute.snapshot.params?.kampId) {
      this.kampService.find(this.activatedRoute.snapshot.params?.kampId).subscribe(res => {
        this.kamp = res
      })
    }
    // console.log(this.action_create, this.action_update, this.action_delete);
    // this.action = this.activatedRoute.snapshot.url[1]?.path;
    
    // console.log(this.activatedRoute.snapshot.params?.kampId);
    // this.isReadOnly = this.action == "delete";
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}