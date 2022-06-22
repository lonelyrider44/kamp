import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Mesto } from 'app/modules/mesto/mesto';
import { MestoService } from 'app/modules/mesto/mesto.service';
import { Form } from 'app/modules/shared/form';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Observable, of, ReplaySubject } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Kamp, kampFormGroup, KampStatus, newKamp } from '../kamp';
import { KampService } from '../kamp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends Form implements OnInit {

  kamp: Kamp = newKamp();
  kampForm: FormGroup;
  rimski_brojevi = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  mesta: Mesto[];
  statusi: KampStatus[] = [];
  filtriranaMesta: Observable<Mesto[]>;

  /** control for the MatSelect filter keyword */
  public mestoFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<Mesto[]> = new ReplaySubject<Mesto[]>(1);

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected routerExt: RouterExtService,
    public kampService: KampService,
    public mestoService: MestoService,
    protected _location: Location,
    protected _snackBar: MatSnackBar
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    // this.obj = newKamp();
    this.form = this.kampForm = kampFormGroup(this.fb, this.kamp);
    this.service = this.kampService;
    // this.kampForm = kampFormGroup(this.fb, this.kamp);
  }

  ngOnInit(): void {
    this.kampService.statusi().subscribe(res => {
      this.statusi = res;
    });
    this.loadFromUrl();

    // this.kampForm.get('lokacija')?.valueChanges.pipe(
    //   debounceTime(500),
    //   tap(() => {
    //     this.filtriranaMesta = of([]);
    //   }),
    //   switchMap( async value => this.mestoService.autocomplete(value as any))
    //   ).subscribe(data => {
    //     this.filtriranaMesta = data;
    //   });

    // listen for search field value changes
    this.mestoFilterCtrl.valueChanges
       .pipe(debounceTime(500))
      .subscribe(() => {
        // console.log('mestoFilterctrl.valuChanges')
        if(this.mestoFilterCtrl.value){
          console.log(this.mestoFilterCtrl.value)
          this.filterBanks();
        }
      });
  }

  displayMesto(mesto: Mesto) { return mesto && mesto.naziv ? mesto.naziv : ''; }

  ngAfterViewInit() {
    if (this.action_create) {
      this.add_smena();
      // this.add_cena();
    }
  }

  // store() {
  //   this.form.get('lokacija_id').setValue(this.kampForm.get('lokacija').value?.id)
  //   super.store()
  // }

  loadFromUrl() {
    super.loadFromUrl();
    if (this.activatedRoute.snapshot.params?.kampId) {
      this.kampService.find(this.activatedRoute.snapshot.params?.kampId).subscribe(res => {
        // console.log(res);
        this.kamp = res

        this.kamp.smene.forEach(smena => {
          this.add_smena(null, smena.id, smena.naziv, smena.datum_od, smena.datum_do);
        })
        this.kamp.dodatni_paketi.forEach(dodatni_paket => {
          this.add_dodatni_paket(null, dodatni_paket.id, dodatni_paket.naziv, dodatni_paket.opis, dodatni_paket.iznos_rsd, dodatni_paket.iznos_eur);
        })
        this.kamp.organizovani_prevoz.forEach(organizovani_prevoz => {
          this.add_organizovani_prevoz(null, organizovani_prevoz.id, organizovani_prevoz.naziv, organizovani_prevoz.cena_rsd, organizovani_prevoz.cena_eur);
        })

        this.kampForm.get('lokacija_id').setValue(this.kamp.lokacija_id);
        // console.log(this.action_update)
      })
    }
  }

  get obj() { return this.kamp };

  get smene() { return this.kampForm.get('smene') as FormArray; }

  get cene() { return this.kampForm.get('cene') as FormArray; }

  get dodatni_paketi() { return this.kampForm.get('dodatni_paketi') as FormArray; }

  get organizovani_prevoz() { return this.kampForm.get('organizovani_prevoz') as FormArray; }

  add_smena(index: any = null, id = null, naziv = null, datum_od = null, datum_do = null) {
    if (!index) { index = this.smene.length + 1; }
    this.smene.push(this.fb.group({
      id: id,
      naziv: naziv ?? (this.rimski_brojevi[index - 1] + ' smena'),
      datum_od: datum_od ?? '',
      datum_do: datum_do ?? '',
      // broj_prijava: ''
    }))
  }
  add_cena(index: any = null) {
    if (!index) { index = this.smene.length + 1; }
    this.cene.push(this.fb.group({
      naziv: '',
      iznos_rsd: '',
      iznos_eur: '',
    }))
  }
  add_dodatni_paket(index: any = null, id = null, naziv = null, opis = null, iznos_rsd = null, iznos_eur = null) {
    this.dodatni_paketi.push(this.fb.group({
      id: id,
      naziv: naziv ?? '',
      opis: opis ?? '',
      iznos_rsd: iznos_rsd ?? '',
      iznos_eur: iznos_eur ?? '',
    }))
  }
  add_organizovani_prevoz(index: any = null, id = null, naziv = null, cena_rsd = null, cena_eur = null) {
    this.organizovani_prevoz.push(this.fb.group({
      id: id,
      naziv: naziv ?? '',
      cena_rsd: cena_rsd ?? '',
      cena_eur: cena_eur ?? '',
    }))
  }

  remove_smena(index) { this.smene.removeAt(index); }

  remove_cena(index) { this.cene.removeAt(index); }

  remove_dodatni_paket(index) { this.dodatni_paketi.removeAt(index); }

  remove_organizovani_prevoz(index) { this.organizovani_prevoz.removeAt(index); }

  protected filterBanks() {
    let search = this.mestoFilterCtrl.value;
    this.filtriranaMesta = this.mestoService.autocomplete(search)

    this.mestoService.autocomplete(search).subscribe(res => this.filteredBanks.next(res))
    // if (!this.banks) {
    //   return;
    // }
    // // get the search keyword
    // if (!search) {
    //   this.filteredBanks.next(this.banks.slice());
    //   return;
    // } else {
    //   search = search.toLowerCase();
    // }
    // // filter the banks
    // this.filteredBanks.next(
    //   this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    // );
  }

}