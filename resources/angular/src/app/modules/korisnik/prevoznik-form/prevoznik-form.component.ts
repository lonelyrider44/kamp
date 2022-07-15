import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { KampService } from 'app/modules/kamp/kamp.service';
import { MestoService } from 'app/modules/mesto/mesto.service';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { Form } from '../../shared/form'
import { newPrevoznik, Prevoznik, prevoznikFormGroup } from '../prevoznik';
import { PrevoznikService } from '../prevoznik.service';
import { Trener } from '../trener';
import { TrenerService } from '../trener.service';

@Component({
  selector: 'app-prevoznik-form',
  templateUrl: './prevoznik-form.component.html',
  styleUrls: ['./prevoznik-form.component.scss']
})
export class PrevoznikFormComponent extends Form implements OnInit {

  prevoznik: Prevoznik = newPrevoznik();
  prevoznikForm: FormGroup;

  velicine: Velicina[] = [];

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected routerExt: RouterExtService,
    protected activatedRoute: ActivatedRoute,
    public prevoznikService: PrevoznikService,
    public velicinaService: VelicinaService,
    private _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);

    this.form = this.prevoznikForm = prevoznikFormGroup(this.fb, this.prevoznik);
    this.service = this.prevoznikService;
  }

  get obj() { return this.prevoznik };

  ngOnInit(): void { 
    this.loadFromUrl();
    this.velicinaService.all().subscribe(res => this.velicine = res)
  }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.prevoznikId) {
      this.prevoznikService.find(this.activatedRoute.snapshot.params?.prevoznikId).subscribe(res => {
        // console.log(res);
        this.prevoznik = res
      })
    }
  }

}
