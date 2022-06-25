import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Kamp, newKamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { OrganizovaniPrevoz } from 'app/modules/organizovani-prevoz/organizovani-prevoz';
import { Pol } from 'app/modules/pol/pol';
import { PolService } from 'app/modules/pol/pol.service';
import { JMBG } from 'app/modules/shared/jmbg';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { newPrijava, Prijava, prijavaFormGroup } from '../prijava';
import { PrijavaService } from '../prijava.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {
  prijava: Prijava = newPrijava();
  kamp: Kamp = newKamp();
  kampovi: Kamp[] = [];
  velicine: Velicina[] = [];
  organizovani_prevoz: OrganizovaniPrevoz[] = [];
  pol: Pol[] = [];
  prijavaForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;
  prijava_success: boolean = false;
  nema_kampa: boolean = false;
  public previousUrl: string = null;
  public currentUrl: string = null;

  matcher = new MyErrorStateMatcher();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private prijavaService: PrijavaService,
    private kampService: KampService,
    private velicinaService: VelicinaService,
    private polService: PolService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.prijavaForm = prijavaFormGroup(this.fb, this.prijava);
    this.prijavaForm.get('gratis').setValue(false);
    this.prijavaForm.get('opstina').setValue(false);
    this.prijavaForm.get('status_id').setValue(1);

  }

  ngOnInit(): void {
    this.polService.all().subscribe(res => this.pol = res )

    this.velicinaService.all().subscribe(res => this.velicine = res);

    this.kampService.aktivni().subscribe(res => {
      this.kampovi = res;
      this.nema_kampa = this.kampovi.length==0;
    });
    this.prijavaForm.get('kamp_id')?.valueChanges.subscribe( x => {
      this.kamp = this.kampovi.find(k => k.id = x)
      if(this.kamp){
        this.smene.clear();
        this.kamp.aktivne_smene.forEach(smena => {
          this.smene.push(
            this.fb.group({
              naziv: smena.naziv,
              id: smena.id,
              datum_od: smena.datum_od,
              datum_do: smena.datum_do,
              izabrana: false
            }));
          // console.log(smena); 
        })
        this.dodatni_paketi.clear();
        this.kamp.dodatni_paketi.forEach(dt => {
          this.dodatni_paketi.push(
            this.fb.group({
              opis: dt.opis,
              naziv: dt.naziv,
              id: dt.id,
              iznos_eur: dt.iznos_eur,
              izabran: false
            }));
          // console.log(smena); 
        })

      }else{
        this.smene.clear();
        this.dodatni_paketi.clear();
      }
    })
  }

  store() {
    this.prijavaService.store(this.prijavaForm.value).subscribe(
      {
        next: res => {
          this.prijava_success = true;
          this.prijava = res;
          // this.router.navigateByUrl('/admin/kamp') 
        },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.prijavaService.update(this.prijava.id, this.prijavaForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
    this.prijavaService.delete(this.prijava.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/kamp') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
    })
  }
  submitForm() {
    this.store();
    // this.update();
    // this.delete();
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
        }else{
          this._snackBar.open(error.error.errors[prop],'OK')
        }
      });
    }else{
      this._snackBar.open(error.error.message,'OK')
    }
    // if(error.status === 500){
      
    //   console.log(error.error.message);
    // }
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
    if (this.activatedRoute.snapshot.params?.kampId) {
      this.prijavaService.find(this.activatedRoute.snapshot.params?.kampId).subscribe(res => {
        this.prijava = res
      })
    }
  }

  jmbg_parse() {
    var jmbg = new JMBG(this.prijavaForm.get('jmbg_pasos').value)
    if(jmbg.is_valid()){
      this.prijavaForm.get('datum_rodjenja').setValue(jmbg.get_date_str());
      this.prijavaForm.get('pol_id').setValue(jmbg.get_pol_id())
    }
  }

  get smene(){
    return this.prijavaForm.get('smene') as FormArray;
  }
  get dodatni_paketi(){
    return this.prijavaForm.get('dodatni_paketi') as FormArray;
  }

  chkSmenaChange($event){
    // console.log($event);
  }

}
