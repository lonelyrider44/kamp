import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { MyErrorStateMatcher } from "./my-error-state-matcher";
import { RouterExtService } from "./router-ext.service";
import { BaseService, IBaseService } from "./service";

export class Form {
  matcher = new MyErrorStateMatcher();

  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  form: FormGroup;
  service: any;
  // obj: any;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected routerExt: RouterExtService,
    protected _snackBar: MatSnackBar
  ) { }

  get obj() { return null; }
  store() {
    this.service?.store(this.form.value).subscribe({
      next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
  }
  update() {
    this.service?.update(this.obj?.id, this.form.value).subscribe({
        next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
      })
  }
  delete() {
    this.service.delete(this.obj?.id).subscribe({
      next: res => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
  }
  submitForm() {
    console.log('Submit form');
    console.log(this.action_create);
    if (this.action_create) this.store();
    if (this.action_update) this.update();
    if (this.action_delete) this.delete();
    
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
    } else {
      this._snackBar.open(error.error.message, 'OK')
    }
  }
  goBack() {
    this.router.navigateByUrl(this.routerExt.getPreviousUrl())
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

  }
}
