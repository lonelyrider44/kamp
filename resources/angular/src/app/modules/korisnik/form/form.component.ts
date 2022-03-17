import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  korisnik: Korisnik = {
    id: -1,
    // id_klijenta: null,
    // id_korisnika: -1,
    // domen: '', 
    // datum_start: '', 
    // datum_end: '', 
    // napomena: ''
  };
  korisnikForm: FormGroup;
  errors: any[] = [];
  action = "";
  isReadOnly: boolean = false;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public korisnikService: KorisnikService,
    private _location: Location
  ) {
    this.korisnikForm = this.fb.group({
    })
  }


  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[1].path;
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[2]) {
      this.korisnikService.find(this.activatedRoute.snapshot.url[2].path).subscribe(res => {
        this.korisnik = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.korisnikService.store(this.korisnikForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.korisnikForm, error)}
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.korisnikService.update(this.korisnik.id, this.korisnikForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.korisnikForm, error)}
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.korisnikService.delete(this.korisnik.id).subscribe({
      next: res => { this.router.navigateByUrl('/domeni/home') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.korisnikForm, error)}
    })
  }
  submitForm() {
    this.store();
    this.update();
    this.delete();
  }
  submitFormFailed(form: FormGroup, error: HttpErrorResponse){
    this.errors = error.error.errors;
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
