import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { KampService } from 'app/modules/kamp/kamp.service';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { newSmena, Smena, smenaFormGroup } from '../smena';
import { SmenaService } from '../smena.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  smena: Smena = newSmena();
  smenaForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kampService: KampService,
    public smenaService: SmenaService,
    private _location: Location
  ) {
    this.smenaForm = smenaFormGroup(this.fb, this.smena);
  }

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  store() {
    if (!this.action_create) return;

    // console.log(this.kampForm.getRawValue());
    // return;
    this.smenaService.store(this.smenaForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.smenaForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.kampService.update(this.smena.id, this.smenaForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.smenaForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
    this.kampService.delete(this.smena.id).subscribe({
      next: res => { this.router.navigateByUrl('/kamp') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.smenaForm, error) }
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
      this.smenaService.find(this.activatedRoute.snapshot.params?.smenaId).subscribe(res => {
        this.smena = res
      })
    }
    // console.log(this.action_create, this.action_update, this.action_delete);
    // this.action = this.activatedRoute.snapshot.url[1]?.path;
    
    // console.log(this.activatedRoute.snapshot.params?.kampId);
    // this.isReadOnly = this.action == "delete";
  }
}