import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Oprema } from '../oprema';
import { OpremaService } from '../oprema.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  oprema: Oprema = {
    id: -1,
    // id_klijenta: null,
    // id_korisnika: -1,
    // domen: '', 
    // datum_start: '', 
    // datum_end: '', 
    // napomena: ''
  };
  opremaForm: FormGroup;
  errors: any[] = [];
  action = "";
  isReadOnly: boolean = false;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public opremaService: OpremaService,
    private _location: Location
  ) {
    this.opremaForm = this.fb.group({
    })
  }


  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[1].path;
    this.isReadOnly = this.action == "delete";
    if (this.activatedRoute.snapshot.url[2]) {
      this.opremaService.find(this.activatedRoute.snapshot.url[2].path).subscribe(res => {
        this.oprema = res
      })
    }
  }

  store() {
    if (this.action != "unos") return;

    this.opremaService.store(this.opremaForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.opremaForm, error)}
      }
    )
  }
  update() {
    if (this.action != "izmena") return;
    this.opremaService.update(this.oprema.id, this.opremaForm.value).subscribe(
      {
        next: res => { this.router.navigateByUrl('/domeni/home') },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.opremaForm, error)}
      }
    )
  }
  delete() {
    if (this.action != "brisanje") return;
    this.opremaService.delete(this.oprema.id).subscribe({
      next: res => { this.router.navigateByUrl('/domeni/home') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.opremaForm, error)}
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
