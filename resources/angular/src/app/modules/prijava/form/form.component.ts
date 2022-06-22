import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized, UrlSegment } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Kamp, newKamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Trener } from 'app/modules/korisnik/trener';
import { OrganizovaniPrevoz } from 'app/modules/organizovani-prevoz/organizovani-prevoz';
import { Pol } from 'app/modules/pol/pol';
import { PolService } from 'app/modules/pol/pol.service';
import { JMBG } from 'app/modules/shared/jmbg';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { TrenerService } from 'app/modules/trener/trener.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { filter, pairwise } from 'rxjs/operators';
import { newPrijava, Prijava, prijavaFormGroup } from '../prijava';
import { PrijavaService } from '../prijava.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  prijava: Prijava = newPrijava();
  kamp: Kamp;
  kampovi: [];
  velicine: Velicina[] = [];
  organizovani_prevoz: OrganizovaniPrevoz[] = [];
  pol: Pol[] = [];
  treneri: Trener[] = [];
  prijavaForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;
  prijava_success: boolean = false;
  nema_kampa: boolean = false;

  matcher = new MyErrorStateMatcher();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerExtService: RouterExtService,
    private authService: AuthService,
    private prijavaService: PrijavaService,
    private kampService: KampService,
    private velicinaService: VelicinaService,
    private polService: PolService,
    private trenerService: TrenerService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.prijavaForm = prijavaFormGroup(this.fb, this.prijava);
  }

  ngOnInit(): void {
    this.velicinaService.all().subscribe(res => this.velicine = res);
    this.polService.all().subscribe(res => this.pol = res );
    this.trenerService.all().subscribe( res => this.treneri = res );
    // console.log('this form')
    this.loadFromUrl();
  }

  store() {
    this.prijavaService.store(this.prijavaForm.value).subscribe({ 
        next: res => {
          this.prijava_success = true;
          // this.router.navigateByUrl('/admin/kamp') 
        },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
      })
  }
  update() {
    this.prijavaService.update(this.prijava.id, this.prijavaForm.value).subscribe({
        // next: res => { this.router.navigateByUrl('/admin/prijave') },
        next: res => { this.router.navigateByUrl(this.routerExtService.getPreviousUrl()) },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
      })
  }
  delete() {
    this.prijavaService.delete(this.prijava.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/prijave') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaForm, error) }
    })
  }
  submitForm() {
    if (this.action_create) this.store();
    if (this.action_update) this.update();
    if (this.action_delete) this.delete();
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
    // console.log(this.activatedRoute.snapshot.params?.prijavaId)
    if (this.activatedRoute.snapshot.params?.prijavaId) {
      this.prijavaService.find(this.activatedRoute.snapshot.params?.prijavaId).subscribe(res => {
        // console.log(res)
        this.prijava = res
        if(this.prijava.kamp){
          this.prijava.kamp.smene.forEach(smena => {
            this.smene.push(
              this.fb.group({
                naziv: smena.naziv,
                id: smena.id,
                datum_od: smena.datum_od,
                datum_do: smena.datum_do,
                izabrana: this.prijava.smene.find( s => s.id==smena.id)
              }));
            // console.log(smena); 
          })
          this.prijava.kamp.dodatni_paketi.forEach(dt => {
            this.dodatni_paketi.push(
              this.fb.group({
                opis: dt.opis,
                naziv: dt.naziv,
                id: dt.id,
                iznos_eur: dt.iznos_eur,
                izabran: this.prijava.dodatni_paketi.find(dp => dp.id==dt.id )
              }));
            // console.log(smena); 
          })
        }
      })
    }
    // console.log(this.action_create, this.action_update, this.action_delete);
    // this.action = this.activatedRoute.snapshot.url[1]?.path;

    // console.log(this.activatedRoute.snapshot.params?.kampId);
    // this.isReadOnly = this.action == "delete";
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
    console.log($event);
  }
  gratis_changed($event){
    if($event.checked){
      this.prijava.ukupno_rsd = 0;
      this.prijava.ukupno_eur = 0;
      this.prijava.opstina = false;
      this.prijava.donosi_depozit_u_kamp = false;
    }else{
      this.prijava.ukupno_rsd = (+this.prijava.ukupno_smene_rsd + +this.prijava.ukupno_dodatni_paketi_rsd).toFixed(2);
      this.prijava.ukupno_eur = (+this.prijava.ukupno_smene_eur + +this.prijava.ukupno_dodatni_paketi_eur).toFixed(2);
    }
    // console.log($event.checked);
  }
  opstina_changed($event){
    if($event.checked){
      // this.prijava.ukupno_rsd = 0;
      // this.prijava.ukupno_eur = 0;
      // this.cena_change();
      this.prijava.gratis = false;
      this.prijava.donosi_depozit_u_kamp = false;
    }else{
    }
    // console.log($event.checked);
  }
  get ukupno_rsd(){
    if(this.prijava.gratis) return (0).toFixed(2);
    return (+this.prijava.ukupno_smene_rsd + +this.prijava.ukupno_dodatni_paketi_rsd).toFixed(2)
  }
  get ukupno_eur(){
    if(this.prijava.gratis) return (0).toFixed(2);
    return (+this.prijava.ukupno_smene_eur + +this.prijava.ukupno_dodatni_paketi_eur).toFixed(2);
  }
}
