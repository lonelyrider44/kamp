import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Roditelj } from 'app/modules/roditelj/roditelj';
import { RoditeljService } from 'app/modules/roditelj/roditelj.service';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Smena } from 'app/modules/smena/smena';
import { SmenaService } from 'app/modules/smena/smena.service';
import { Ucesnik } from 'app/modules/ucesnik/ucesnik';
import { UcesnikService } from 'app/modules/ucesnik/ucesnik.service';
import { StatusZahteva } from '../status-zahteva';
import { newZahtev, odgovorFormGroup, Zahtev, zahtevFormGroup } from '../zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-odgovor-form',
  templateUrl: './odgovor-form.component.html',
  styleUrls: ['./odgovor-form.component.scss']
})
export class OdgovorFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  zahtev: Zahtev = newZahtev();
  zahtevForm: FormGroup;
  odgovorForm: FormGroup;

  statusi: StatusZahteva[];
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  kampovi: Kamp[] = [];
  kamp_id = null;
  smene: Smena[] = [];
  smena_id = null;
  roditelji: Roditelj[] = [];
  roditelj_id = null;
  ucesnici: Ucesnik[] = [];
  ucesnik_id = null;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private routerExt: RouterExtService,
    private activatedRoute: ActivatedRoute,
    private roditeljService: RoditeljService,
    private ucesnikService: UcesnikService,
    private kampService: KampService,
    private smenaService: SmenaService,
    public zahtevService: ZahtevService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.odgovorForm = odgovorFormGroup(this.fb, this.zahtev);
  }

  ngOnInit(): void {
    this.loadFromUrl();
    this.zahtevService.statusi().subscribe(res => this.statusi = res)

    // this.roditeljService.all().subscribe(res => this.roditelji = res);
    // this.kampService.all().subscribe(res => this.kampovi = res);
  }

  kamp_changed($event){
    this.kampService.smene($event.value).subscribe(res => this.smene = res);
  }
  smena_changed(){

  }
  roditelj_changed($event){
    console.log('roditelj changed')
    this.roditeljService.ucesnici($event.value).subscribe(res => this.ucesnici = res);
  }
  ucesnik_changed(){

  }

  store() {
    if (!this.action_create) return;

    this.zahtevService.store(this.zahtevForm.value).subscribe({
      next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error) }
    })
  }
  update() {
    if (!this.action_update) return;
    this.zahtevService.update_odgovor(this.zahtev.id, this.odgovorForm.value).subscribe({
        next: res => { this.router.navigateByUrl('/admin/zahtevi') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error) }
      })
  }
  delete() {
    if (!this.action_delete) return;
    this.zahtevService.delete(this.zahtev.id).subscribe({
      next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.zahtevForm, error) }
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
    } else {
      this._snackBar.open(error.error.message, 'OK')
    }
  }
  goBack() {
    this._location.back();
  }
  loadFromUrl() {
    this.action_create = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('unos');
    this.action_update = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('izmena');
    this.action_delete = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('brisanje');
    this.action_update = true;
    if (this.activatedRoute.snapshot.params?.zahtevId) {
      this.zahtevService.find(this.activatedRoute.snapshot.params?.zahtevId).subscribe(res => {
        // console.log(res);
        this.zahtev = res
        if(this.zahtev.kamp_id){
          this.kampService.smene(this.zahtev.kamp_id).subscribe(res => this.smene = res);
        }
        if(this.zahtev.roditelj_id){
          this.roditeljService.ucesnici(this.zahtev.roditelj_id).subscribe(res => this.ucesnici = res);
        }
      })
    }
  }

}