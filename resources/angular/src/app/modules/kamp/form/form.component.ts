import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Mesto } from 'app/modules/mesto/mesto';
import { MestoService } from 'app/modules/mesto/mesto.service';
import { Observable, of } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Kamp, kampFormGroup, KampStatus, newKamp } from '../kamp';
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
  rimski_brojevi = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
  mesta: Mesto[];
  statusi: KampStatus[] = [];
  filtriranaMesta: Observable<Mesto[]>;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kampService: KampService,
    public mestoService: MestoService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.kampForm = kampFormGroup(this.fb, this.kamp);
  }

  ngOnInit(): void { 
    this.kampService.statusi().subscribe(res => {
      this.statusi = res;
    });
    this.loadFromUrl();

    this.kampForm.get('lokacija')?.valueChanges.pipe(
      debounceTime(500),
      tap(() => {
        this.filtriranaMesta = of([]);
      }),
      switchMap( async value => this.mestoService.autocomplete(value as any))
      ).subscribe(data => {
        this.filtriranaMesta = data;
      });
  }
  displayMesto(mesto: Mesto){
    // console.log('display mesto')
    // console.log(mesto);
    return mesto && mesto.naziv ? mesto.naziv : '';
  }
  ngAfterViewInit(){
    if (this.action_create){
      this.add_smena();
      // this.add_cena();
    }
  }

  store() {
    if (!this.action_create) return;

    this.kampForm.get('lokacija_id').setValue(this.kampForm.get('lokacija').value?.id)
    this.kampService.store(this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  update() {
    if (!this.action_update) return;
    this.kampService.update(this.kamp.id, this.kampForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/admin/kamp') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.kampForm, error) }
      }
    )
  }
  delete() {
    if (!this.action_delete) return;
    this.kampService.delete(this.kamp.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/kamp') },
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
    if (this.activatedRoute.snapshot.params?.kampId) {
      this.kampService.find(this.activatedRoute.snapshot.params?.kampId).subscribe(res => {
        // console.log(res);
        this.kamp = res

        this.kamp.smene.forEach(smena => {
          this.add_smena(null, smena.id, smena.naziv, smena.datum_od, smena.datum_do);
        })
        this.kamp.dodatni_paketi.forEach(dodatni_paket => {
          this.add_dodatni_paket(null, dodatni_paket.id, dodatni_paket.naziv, dodatni_paket.opis, dodatni_paket.iznos_rsd, dodatni_paket.iznos_eur);
        })
        this.kamp.organizovani_prevoz.forEach(organizovani_prevoz => {
          this.add_organizovani_prevoz(null, organizovani_prevoz.id, organizovani_prevoz.naziv, organizovani_prevoz.cena_rsd, organizovani_prevoz.cena_eur);
        })

        this.kampForm.get('lokacija_id').setValue(this.kamp.lokacija_id);
        // console.log(this.action_update)
      })
    }
  }

  get smene(){
    return this.kampForm.get('smene') as FormArray;
  }
  add_smena(index:any = null, id=null, naziv=null, datum_od = null, datum_do=null){
    if(!index){
      index = this.smene.length+1;
    }
    this.smene.push(this.fb.group({
      id: id,
      naziv: naziv ?? (this.rimski_brojevi[index-1] + ' smena'),
      datum_od: datum_od ?? '',
      datum_do: datum_do ?? '',
      // broj_prijava: ''
    }))
  }
  remove_smena(index){
    this.smene.removeAt(index);
  }
  broj_smena_change(){
    let n = this.kampForm.get('broj_smena')?.value;
    if (n == 1) { n = 0; }

    for (let i = this.smene.length + 1; i <= n; i++) { this.add_smena(i); }

    for (let i = this.smene.length; i > n; i--) { this.smene.removeAt(i - 1); }
  }
  get cene(){
    return this.kampForm.get('cene') as FormArray;
  }
  add_cena(index:any = null){
    if(!index){
      index = this.smene.length+1;
    }
    this.cene.push(this.fb.group({
      naziv: '',
      iznos_rsd: '',
      iznos_eur: '',
    }))
  }
  remove_cena(index){
    this.cene.removeAt(index);
  }

  get dodatni_paketi(){
    return this.kampForm.get('dodatni_paketi') as FormArray;
  }
  add_dodatni_paket(index:any = null, id=null, naziv = null, opis = null, iznos_rsd = null, iznos_eur = null){
    this.dodatni_paketi.push(this.fb.group({
      id: id,
      naziv: naziv ?? '',
      opis: opis ?? '',
      iznos_rsd: iznos_rsd ?? '',
      iznos_eur: iznos_eur ?? '',
    }))
  }
  remove_dodatni_paket(index){
    this.dodatni_paketi.removeAt(index);
  }

  get organizovani_prevoz(){
    return this.kampForm.get('organizovani_prevoz') as FormArray;
  }
  add_organizovani_prevoz(index:any = null, id=null, naziv = null, cena_rsd=null, cena_eur = null){
    this.organizovani_prevoz.push(this.fb.group({
      id: id,
      naziv: naziv ?? '',
      cena_rsd: cena_rsd ?? '',
      cena_eur: cena_eur ?? '',
    }))
  }
  remove_organizovani_prevoz(index){ this.organizovani_prevoz.removeAt(index);}
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}