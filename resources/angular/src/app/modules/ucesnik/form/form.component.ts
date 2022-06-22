import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { Ucesnik } from '../ucesnik';
import { UcesnikService } from '../ucesnik.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ucesnik: Ucesnik = {
    id: -1,
    // id_klijenta: null,
    // id_korisnika: -1,
    // domen: '', 
    // datum_start: '', 
    // datum_end: '', 
    // napomena: ''
  };
  ucesnikForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  action = "";
  isReadOnly: boolean = false;
  matcher = new MyErrorStateMatcher();
  velicine = ['8','10','12','14','16','S','M','L','XL','2XL','3XL'];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public ucesnikService: UcesnikService,
    private _location: Location
  ) {
    this.ucesnikForm = this.fb.group({
      ime: [''],
      prezime: [''],
      datum_rodjenja: [''],
      mesto_id: [''],
      jmbg: [''],
      //roditelj
      roditelj_jmbg: [''],
      roditelj_ime: [''],
      roditelj_prezime: [''],
      roditelj_telefon: [''],
      roditelj_email: [''],
      kamp_id: [''],
      trener_id: [''],
      smene_ids: [''],
      hotel_id: [''],
      broj_sobe: [''],
      napomena_smestaj: [''],
      napomena_hrana: [''],
      sorc: [''],
      duks: [''],
      trenerka: [''],
      majica: [''],
      status: ['']

    })
  }


  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[0].path;
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[2]) {
      this.ucesnikService.find(this.activatedRoute.snapshot.url[1].path).subscribe(res => {
        this.ucesnik = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.ucesnikService.store(this.ucesnikForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.ucesnikForm, error)}
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.ucesnikService.update(this.ucesnik.id, this.ucesnikForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.ucesnikForm, error)}
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.ucesnikService.delete(this.ucesnik.id).subscribe({
      next: res => { this.router.navigateByUrl('/domeni/home') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.ucesnikForm, error)}
    })
  }
  submitForm() {
    this.store();
    this.update();
    this.delete();
  }
  submitFormFailed(form: FormGroup, error: HttpErrorResponse){
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
}