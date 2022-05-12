import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface Kamp {
    id?: number,

    lokacija_id: any,
    naziv: any,
    datum_od: any,
    datum_do: any,
    broj_prijava: any,
    status: any, 
    cena_smene: any,
    cena_smene_rsd: any,
    cena_smene_eur: any,
    broj_smena: any,
    smene: any,
    cene: any,
    dodatni_paketi: any,
    organizovani_prevoz: any
}

export function newKamp(): Kamp{
    return {
        // id: '',
        lokacija_id: '',
        naziv: '',  
        datum_od: '',
        datum_do: '',
        broj_prijava: '',
        status: '',
        cena_smene: '',
        cena_smene_rsd: '',
        cena_smene_eur: '',
        broj_smena: '',
        smene: [],
        cene: [],
        dodatni_paketi: [],
        organizovani_prevoz: []
      };
}
export function kampFormGroup(fb: FormBuilder, kamp: Kamp): FormGroup{
    return fb.group({
        lokacija_id: [kamp.lokacija_id],
        naziv: [kamp.naziv],
        datum_od: [kamp.datum_od],
        datum_do: [kamp.datum_do],
        broj_prijava: [kamp.broj_prijava],
        // status: [kamp.status],
        cena_smene: [kamp.cena_smene],
        cena_smene_rsd: [kamp.cena_smene],
        cena_smene_eur: [kamp.cena_smene],
        broj_smena: '',
        smene: fb.array([]),
        cene: fb.array([]),
        dodatni_paketi: fb.array([]),
        organizovani_prevoz: fb.array([])
      })
}
