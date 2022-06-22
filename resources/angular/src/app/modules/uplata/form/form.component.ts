import { Location, LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { Smena } from 'app/modules/smena/smena';
import { SmenaService } from 'app/modules/smena/smena.service';
import { Ucesnik } from 'app/modules/ucesnik/ucesnik';
import { newUplata, Uplata, uplataFormGroup } from '../uplata';
import { UplataService } from '../uplata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  uplata: Uplata = newUplata();
  uplataForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  kampovi: Kamp[] = [];
  smene: Smena[] = [];
  ucesnici: Ucesnik[] = [];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public uplataService: UplataService,
    private kampService: KampService,
    private smenaService: SmenaService,
    private _location: LocationStrategy,
    private _snackBar: MatSnackBar
  ) {
    this.uplataForm = uplataFormGroup(this.fb, this.uplata);
  }

  ngOnInit(): void { 
    this.kampService.all().subscribe(res => this.kampovi = res);
    this.loadFromUrl();
  }
  kamp_changed($event){
    this.kampService.smene($event.value).subscribe(res => this.smene = res);
    this.kampService.ucesnici($event.value).subscribe(res => this.ucesnici = res);
  }
  smena_changed($event){
    this.smenaService.ucesnici($event.value).subscribe(res => this.ucesnici = res);
  }
  store() {
    if (!this.action_create) return;

    this.uplataService.store(this.uplataForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.uplataForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.uplataService.update(this.uplata.id, this.uplataForm.getRawValue()).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/uplata') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.uplataForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
    this.uplataService.delete(this.uplata.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/uplata') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.uplataForm, error) }
    })
  }
  submitForm() {
    this.store();
    this.update();
    this.delete();
  }

  submitFormFailed(form: FormGroup, error: HttpErrorResponse) {
    // this.errors = error.error.errors;
    // console.log(error.error);
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
    }else{
      this._snackBar.open(error.error.message,'OK')
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
    if (this.activatedRoute.snapshot.params?.uplataId) {
      this.uplataService.find(this.activatedRoute.snapshot.params?.uplataId).subscribe(res => {
        console.log(res);
        this.uplata = res
        this.kamp_changed({value: this.uplata.kamp_id})
      })
    }
  }

}
