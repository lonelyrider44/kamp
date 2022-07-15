import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { HotelUser, hotelUserFormGroup, newHotelUser } from '../hotel-user';
import { HotelUserService } from '../hotel-user.service';
import { OpremaUserService } from '../oprema-user.service';
import { Form } from '../../shared/form';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-user-form',
  templateUrl: './hotel-user-form.component.html',
  styleUrls: ['./hotel-user-form.component.scss']
})
export class HotelUserFormComponent extends Form implements OnInit {

  hotel_user: HotelUser = newHotelUser();
  hotelUserForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected routerExt: RouterExtService,
    protected activatedRoute: ActivatedRoute,
    public hotelUserService: HotelUserService,
    private _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);

    this.form = this.hotelUserForm = hotelUserFormGroup(this.fb, this.hotel_user);
    this.service = this.hotelUserService;
  }

  get obj() { return this.hotel_user };

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.hotelUserId) {
      this.hotelUserService.find(this.activatedRoute.snapshot.params?.hotelUserId).subscribe(res => {
        // console.log(res);
        this.hotel_user = res
      })
    }
  }

}
