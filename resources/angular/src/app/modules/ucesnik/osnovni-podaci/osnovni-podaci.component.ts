import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Pol } from 'app/modules/pol/pol';
import { PolService } from 'app/modules/pol/pol.service';
import { JMBG } from 'app/modules/shared/jmbg';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Ucesnik } from '../ucesnik';
import { UcesnikService } from '../ucesnik.service';

@Component({
  selector: 'app-osnovni-podaci',
  templateUrl: './osnovni-podaci.component.html',
  styleUrls: ['./osnovni-podaci.component.scss']
})
export class OsnovniPodaciComponent implements OnInit {
  ucesnik: Ucesnik; 
  ucesnikForm: FormGroup;
  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;
  prijava_success: boolean = false;

  matcher = new MyErrorStateMatcher();

  pol: Pol[] = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerExtService: RouterExtService,
    private authService: AuthService,
    private ucesnikService: UcesnikService,
    private polService: PolService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.polService.all().subscribe(res => this.pol = res );
    this.loadFromUrl();
  }

  update() {
    this.ucesnikService.update(this.ucesnik.id, this.ucesnikForm.value).subscribe({
        // next: res => { this.router.navigateByUrl('/admin/prijave') },
        next: res => { this.router.navigateByUrl(this.routerExtService.getPreviousUrl()) },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.ucesnikForm, error) }
      })
  }
  delete() {
    this.ucesnikService.delete(this.ucesnik.id).subscribe({
      next: res => { this.router.navigateByUrl('/admin/prijave') },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.ucesnikForm, error) }
    })
  }
  submitForm() {
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
      this.ucesnikService.find(this.activatedRoute.snapshot.params?.prijavaId).subscribe(res => {
        // console.log(res)
        this.ucesnik = res
      })
    }
    // console.log(this.action_create, this.action_update, this.action_delete);
    // this.action = this.activatedRoute.snapshot.url[1]?.path;

    // console.log(this.activatedRoute.snapshot.params?.kampId);
    // this.isReadOnly = this.action == "delete";
  }

  jmbg_parse() {
    var jmbg = new JMBG(this.ucesnikForm.get('jmbg_pasos').value)
    if(jmbg.is_valid()){
      this.ucesnikForm.get('datum_rodjenja').setValue(jmbg.get_date_str());
      this.ucesnikForm.get('pol_id').setValue(jmbg.get_pol_id())
    }
  }

  get smene(){
    return this.ucesnikForm.get('smene') as FormArray;
  }
  get dodatni_paketi(){
    return this.ucesnikForm.get('dodatni_paketi') as FormArray;
  }

}
