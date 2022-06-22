import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Mesto } from "../mesto/mesto";
import { Smena } from "../smena/smena";

export interface Kamp {
    id?: number,

    lokacija_id: any,
    lokacija?: Mesto,
    smestaj?:string,
    naziv: any,
    datum_od: any,
    datum_do: any,
    broj_prijava: any,
    status: any, 
    status_id: any,
    cena_smene_rsd: any,
    cena_smene_eur: any,
    depozit_rsd: any,
    depozit_eur: any,
    broj_smena: any,
    smene: any,
    cene: any,
    dodatni_paketi: any,
    organizovani_prevoz: any,

    aktivne_smene?: Smena[]
}
export interface KampStatus {
    id: number,
    naziv: string
}

export function newKamp(): Kamp{
    return {
        // id: '',
        lokacija_id: '',
        smestaj: '',
        naziv: '',  
        datum_od: '',
        datum_do: '',
        broj_prijava: '',
        status: '',
        status_id: '',
        // cena_smene: '',
        cena_smene_rsd: '',
        cena_smene_eur: '',
        depozit_rsd: 6000,
        depozit_eur: 50,
        broj_smena: '',
        smene: [],
        cene: [],
        dodatni_paketi: [],
        organizovani_prevoz: []
      };
}
export function kampFormGroup(fb: FormBuilder, kamp: Kamp): FormGroup{
    return fb.group({
        lokacija: '',
        lokacija_id: [kamp.lokacija_id],
        smestaj: '',
        naziv: [kamp.naziv],
        datum_od: [kamp.datum_od],
        datum_do: [kamp.datum_do],
        broj_prijava: [kamp.broj_prijava],
        // status: [kamp.status],
        // cena_smene: [],
        cena_smene_rsd: [''],
        cena_smene_eur: [''],
        depozit_rsd: [''],
        depozit_eur: [''],
        status_id: '',
        smene: fb.array([]),
        cene: fb.array([]),
        dodatni_paketi: fb.array([]),
        organizovani_prevoz: fb.array([])
      })
}
