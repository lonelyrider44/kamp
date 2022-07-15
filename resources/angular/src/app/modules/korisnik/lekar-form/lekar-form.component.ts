import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Form } from '../../shared/form'
import { Lekar, lekarFormGroup, newLekar } from '../lekar';
import { LekarService } from '../lekar.service';

@Component({
  selector: 'app-lekar-form',
  templateUrl: './lekar-form.component.html',
  styleUrls: ['./lekar-form.component.scss']
})
export class LekarFormComponent extends Form implements OnInit {

  lekar: Lekar = newLekar();
  lekarForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected routerExt: RouterExtService,
    protected activatedRoute: ActivatedRoute,
    public lekarService: LekarService,
    private _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);

    this.form = this.lekarForm = lekarFormGroup(this.fb, this.lekar);
    this.service = this.lekarService;
  }

  get obj() { return this.lekar };

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.lekarId) {
      this.lekarService.find(this.activatedRoute.snapshot.params?.lekarId).subscribe(res => {
        // console.log(res);
        this.lekar = res
      })
    }
  }

}
