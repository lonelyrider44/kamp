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
import { Trener } from 'app/modules/trener/trener';
import { TrenerService } from 'app/modules/trener/trener.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { newPrijava, Prijava, prijavaFormGroup } from '../prijava';
import { PrijavaService } from '../prijava.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  prijava: Prijava = newPrijava();
  kamp: Kamp = newKamp();
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

    this.loadFromUrl();
  }

  store() {
    // if (!this.action_create) return;

    this.prijavaService.store(this.prijavaForm.value).subscribe(
      {
        next: res => {
          this.prijava_success = true;
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
    console.log(this.activatedRoute.snapshot.params?.prijavaId)
    if (this.activatedRoute.snapshot.params?.prijavaId) {
      this.prijavaService.find(this.activatedRoute.snapshot.params?.prijavaId).subscribe(res => {
        console.log(res)
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
    // if( $('#jmbg').val().length == 13 ){
    var str = this.prijavaForm.get('jmbg_pasos').value;

    if (str.length == 13) {

      /*
      A B V G D Đ E Ž Z I J K L
      A B C D E F G H I J K L M
      L = 11 - (( 7*(A+E) + 6*(B+Ž) + 5*(V+Z) + 4*(G+I) + 3*(D+J) + 2*(Đ+K) ) % 11)
      */
      var A = str[0];
      var B = str[1];
      var C = str[2];
      var D = str[3];
      var E = str[4];
      var F = str[5];
      var G = str[6];
      var H = str[7];
      var I = str[8];
      var J = str[9];
      var K = str[10];
      var L = str[11];
      var M = str[12];

      let kk = 11 - ((7 * (+A + +G) + 6 * (+B + +H) + 5 * (+C + +I) + 4 * (+D + +J) + 3 * (+E + +K) + 2 * (+F + +L)) % 11);
      if (kk > 9) kk = 0;
      if (kk == M) {
        var dd = str.substring(0, 2);
        var mm = str.substring(2, 4);
        var ggg = str.substring(4, 7);
        var rr = str.substring(7, 9);
        var bbb = str.substring(9, 12);
        var k = str.substring(12, 13);


        ggg = (ggg < 100) ? ("2" + ggg) : ("1" + ggg)
        this.prijavaForm.get('datum_rodjenja').setValue(dd + "." + mm + "." + ggg + ".");

        let pol = (bbb < 500) ? 1 : 2;
        this.prijavaForm.get('pol_id').setValue(pol)
      }
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

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}
