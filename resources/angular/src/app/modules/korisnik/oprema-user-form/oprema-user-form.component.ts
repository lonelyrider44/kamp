import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Form } from '../../shared/form'
import { newOpremaUser, OpremaUser, opremaUserFormGroup } from '../oprema-user';
import { OpremaUserService } from '../oprema-user.service';

@Component({
  selector: 'app-oprema-user-form',
  templateUrl: './oprema-user-form.component.html',
  styleUrls: ['./oprema-user-form.component.scss']
})
export class OpremaUserFormComponent extends Form implements OnInit {

  oprema_user: OpremaUser = newOpremaUser();
  opremaUserForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected routerExt: RouterExtService,
    protected activatedRoute: ActivatedRoute,
    public opremaUserService: OpremaUserService,
    private _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);

    this.form = this.opremaUserForm = opremaUserFormGroup(this.fb, this.oprema_user);
    this.service = this.opremaUserService;
  }

  get obj() { return this.oprema_user };

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.opremaUserId) {
      this.opremaUserService.find(this.activatedRoute.snapshot.params?.opremaUserId).subscribe(res => {
        // console.log(res);
        this.oprema_user = res
      })
    }
  }

}
