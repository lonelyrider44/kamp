import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
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
  rimski_brojevi = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

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
    // console.log('init')
    this.loadFromUrl();
  }
  ngAfterViewInit(){
    // console.log('after view init')
    if (this.action_create){
      this.add_smena();
      // this.add_cena();
    }
  }

  store() {
    if (!this.action_create) return;

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

  get smene(){
    return this.kampForm.get('smene') as FormArray;
  }
  add_smena(index:any = null){
    if(!index){
      index = this.smene.length+1;
    }
    this.smene.push(this.fb.group({
      naziv: 'Smena '+this.rimski_brojevi[index-1],
      datum_od: '',
      datum_do: '',
      broj_prijava: ''
    }))
  }
  broj_smena_change(){
    let n = this.kampForm.get('broj_smena')?.value;
    if (n == 1) {
      n = 0;
    }
    for (let i = this.smene.length + 1; i <= n; i++) {
      this.add_smena(i);
    }

    for (let i = this.smene.length; i > n; i--) {
      this.smene.removeAt(i - 1);
    }

    // if (n > 1) {
    //   this.update_ukupno_vreme();
    // }

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
  broj_cena_change(){
    let n = this.kampForm.get('broj_cena')?.value;
    if (n == 1) {
      n = 0;
    }
    for (let i = this.cene.length + 1; i <= n; i++) {
      this.add_cena(i);
    }

    for (let i = this.cene.length; i > n; i--) {
      this.cene.removeAt(i - 1);
    }

    // if (n > 1) {
    //   this.update_ukupno_vreme();
    // }

  }

  get dodatni_paketi(){
    return this.kampForm.get('dodatni_paketi') as FormArray;
  }
  add_dodatni_paket(index:any = null){
    this.dodatni_paketi.push(this.fb.group({
      naziv: '',
      opis: '',
      iznos_rsd: '',
      iznos_eur: '',
    }))
  }

  get organizovani_prevoz(){
    return this.kampForm.get('organizovani_prevoz') as FormArray;
  }
  add_organizovani_prevoz(index:any = null){
    this.organizovani_prevoz.push(this.fb.group({
      naziv: '',
      opis: '',
      cena_rsd: '',
      cena_eur: '',
    }))
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}