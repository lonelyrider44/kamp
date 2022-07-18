import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Korisnik } from 'app/modules/korisnik/korisnik';
import { Trener } from 'app/modules/korisnik/trener';
import { OrganizovaniPrevoz } from 'app/modules/organizovani-prevoz/organizovani-prevoz';
import { Pol } from 'app/modules/pol/pol';
import { PolService } from 'app/modules/pol/pol.service';
import { newPrijava, Prijava, prijavaFormGroup } from 'app/modules/prijava/prijava';
import { PrijavaStatus } from 'app/modules/prijava/prijava-status';
import { PrijavaService } from 'app/modules/prijava/prijava.service';
import { JMBG } from 'app/modules/shared/jmbg';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { TrenerService } from 'app/modules/trener/trener.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { LekarskiPregled, lekarskiPregledFormGroup, newLekarskiPregled } from '../lekarski-pregled';
import { LekarskiPregledService } from '../lekarski-pregled.service';

@Component({
  selector: 'app-lekarski-pregled-form',
  templateUrl: './lekarski-pregled-form.component.html',
  styleUrls: ['./lekarski-pregled-form.component.scss']
})
export class LekarskiPregledFormComponent implements OnInit {

  prijava: Prijava = newPrijava();
  lekarski_pregled: LekarskiPregled = newLekarskiPregled();
  kamp: Kamp;
  lekar: Korisnik;
  kampovi: [];
  velicine: Velicina[] = [];
  organizovani_prevoz: OrganizovaniPrevoz[] = [];
  pol: Pol[] = [];
  treneri: Trener[] = [];
  // prijavaForm: FormGroup;
  prijavaPregledForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;
  prijava_success: boolean = false;
  nema_kampa: boolean = false;
  cimeri: Prijava[] = [];
  statusi: PrijavaStatus[] = [];

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
    private lekarskiPregledService: LekarskiPregledService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.prijavaService.statusi().subscribe(res => this.statusi = res)
    // this.prijavaForm = prijavaFormGroup(this.fb, this.prijava);
    this.prijavaPregledForm = lekarskiPregledFormGroup(this.fb, this.lekarski_pregled);
    // this.broj_sobe.valueChanges.subscribe(res => {
    //   // console.log(res)
    //   if(this.prijava.id && res)
    //   this.prijavaService.cimeri(this.prijava.id, res).subscribe(res => this.cimeri = res)
    // })
  }

  ngOnInit(): void {
    this.velicinaService.all().subscribe(res => this.velicine = res);
    this.polService.all().subscribe(res => this.pol = res );
    this.trenerService.all().subscribe( res => this.treneri = res );

    let user = this.authService.getUser();
    if(user){
      console.log('user1');
      this.lekar = (user.user_type=="lekar")?user: null;
      console.log(this.lekar);
    }else{
      this.authService.signin().subscribe(res => {
        this.authService.handleData(res)
        user = this.authService.getUser();
        console.log('user2');
        this.lekar = (user.user_type=="lekar")?user: null;
        console.log(this.lekar);
      })
    }
    // console.log('this form')
    this.loadFromUrl();
  }

  store() {
    this.prijavaService.store(this.prijavaPregledForm.value).subscribe({ 
        next: res => {
          this.prijava_success = true;
          // this.router.navigateByUrl('/admin/kamp') 
        },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaPregledForm, error) }
      })
  }
  update() {
    this.lekarskiPregledService.update(this.prijava.id, this.prijavaPregledForm.value).subscribe({
        // next: res => { this.router.navigateByUrl('/admin/prijave') },
        next: res => { 
          this.router.navigateByUrl(this.routerExtService.getPreviousUrl()) 
        },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaPregledForm, error) }
      })
  }
  delete() {
    this.prijavaService.delete(this.prijava.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/prijave') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.prijavaPregledForm, error) }
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
    console.log(this.activatedRoute.snapshot.params?.prijavaId)
    if (this.activatedRoute.snapshot.params?.prijavaId) {
      this.prijavaService.find(this.activatedRoute.snapshot.params?.prijavaId).subscribe(res => {
        // console.log(res)
        this.prijava = res
        if(this.prijava.kamp){
          this.prijava.kamp.smene.forEach(smena => {
            if(this.prijava.smene.find( s => s.id==smena.id)){
              this.smene.push(
                this.fb.group({
                  naziv: smena.naziv,
                  id: smena.id,
                  datum_od: smena.datum_od,
                  datum_do: smena.datum_do,
                  broj_prijava: smena.prijave.length,
                  izabrana: true
                }));
            }
            // console.log(smena); 
          })
          this.prijava.kamp.dodatni_paketi.forEach(dt => {
            if(this.prijava.dodatni_paketi.find(dp => dp.id==dt.id )){
              this.dodatni_paketi.push(
                this.fb.group({
                  opis: dt.opis,
                  naziv: dt.naziv,
                  id: dt.id,
                  iznos_eur: dt.iznos_eur,
                  izabran: true
                }));
              
            }
            // console.log(smena); 
          })
          this.prijava?.pregled?.parametri.forEach(pp => {
            this.parametri_pregleda.push(
              this.fb.group({
                id: pp.id,
                naziv: pp.naziv,
                vrednost: pp.vrednost,
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
    var jmbg = new JMBG(this.prijavaPregledForm.get('jmbg_pasos').value)
    if(jmbg.is_valid()){
      this.prijavaPregledForm.get('datum_rodjenja').setValue(jmbg.get_date_str());
      this.prijavaPregledForm.get('pol_id').setValue(jmbg.get_pol_id())
    }
  }

  get smene(){ return this.prijavaPregledForm.get('smene') as FormArray; }

  get dodatni_paketi(){ return this.prijavaPregledForm.get('dodatni_paketi') as FormArray; }

  get parametri_pregleda() { return this.prijavaPregledForm.get('parametri_pregleda') as FormArray; }

  add_parametar(index: any = null, id = null, naziv = null, vrednost = null) {
    this.parametri_pregleda.push(this.fb.group({
      id: id,
      naziv: naziv,
      vrednost: vrednost
    }))
  }
  remove_parametar(index) { this.parametri_pregleda.removeAt(index); }

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
  // get ukupno_rsd(){
  //   if(this.prijava.gratis) return (0).toFixed(2);
  //   return (+this.prijava.ukupno_smene_rsd + +this.prijava.ukupno_dodatni_paketi_rsd).toFixed(2)
  // }
  // get ukupno_eur(){
  //   if(this.prijava.gratis) return (0).toFixed(2);
  //   return (+this.prijava.ukupno_smene_eur + +this.prijava.ukupno_dodatni_paketi_eur).toFixed(2);
  // }
  // get broj_sobe(){
  //   return this.prijavaForm.get('broj_sobe');
  // }

}
