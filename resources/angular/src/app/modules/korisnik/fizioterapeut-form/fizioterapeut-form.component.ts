import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Fizioterapeut, fizioterapeutFormGroup, newFizioterapeut } from '../fizioterapeut';
import { FizioterapeutService } from '../fizioterapeut.service';
import { Form } from '../../shared/form';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fizioterapeut-form',
  templateUrl: './fizioterapeut-form.component.html',
  styleUrls: ['./fizioterapeut-form.component.scss']
})
export class FizioterapeutFormComponent extends Form implements OnInit {

  fizioterapeut: Fizioterapeut = newFizioterapeut();
  fizioterapeutForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected routerExt: RouterExtService,
    protected activatedRoute: ActivatedRoute,
    public fizioterapeutService: FizioterapeutService,
    private _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);

    this.form = this.fizioterapeutForm = fizioterapeutFormGroup(this.fb, this.fizioterapeut);
    this.service = this.fizioterapeutService;
  }

  get obj() { return this.fizioterapeut };

  ngOnInit(): void { 
    this.loadFromUrl();
  }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.fizioterapeutId) {
      this.fizioterapeutService.find(this.activatedRoute.snapshot.params?.fizioterapeutId).subscribe(res => {
        // console.log(res);
        this.fizioterapeut = res
      })
    }
  }

}
