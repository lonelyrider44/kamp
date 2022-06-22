import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { Administrator, administratorFormGroup, newAdministrator } from '../administrator';
import { AdministratorService } from '../administrator.service';
import { Trener, newTrener, trenerFormGroup } from '../trener';
import { TrenerService } from '../trener.service';

@Component({
  selector: 'app-trener-form',
  templateUrl: './trener-form.component.html',
  styleUrls: ['./trener-form.component.scss']
})
export class TrenerFormComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  trener: Trener = newTrener();
  trenerForm: FormGroup;

  velicine: Velicina[] = [];
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private routerExt: RouterExtService,
    private activatedRoute: ActivatedRoute,
    public trenerService: TrenerService,
    public velicinaService: VelicinaService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.trenerForm = trenerFormGroup(this.fb, this.trener);
  }

  ngOnInit(): void { 
    this.loadFromUrl();
    this.velicinaService.all().subscribe(res => this.velicine = res)
  }

  store() {
    if (!this.action_create) return;

    this.trenerService.store(this.trenerForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.trenerForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.trenerService.update(this.trener.id, this.trenerForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.trenerForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
    this.trenerService.delete(this.trener.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/kamp') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.trenerForm, error) }
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
    if (this.activatedRoute.snapshot.params?.trenerId) {
      this.trenerService.find(this.activatedRoute.snapshot.params?.trenerId).subscribe(res => {
        // console.log(res);
        this.trener = res
      })
    }
  }

}