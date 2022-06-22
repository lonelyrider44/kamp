import { FormBuilder, FormGroup } from "@angular/forms";
import { Kamp } from "../kamp/kamp";
import { Smena } from "../smena/smena";
import { Ucesnik } from "../ucesnik/ucesnik";

export interface Uplata {
    id?: number,
    iznos_rsd: string,
    iznos_eur: string,
    datum_uplate?: string,
    kamp_id?: number,
    smena_id?: number,
    ucesnik_id?:number,
    depozit?:boolean,

    kamp?: Kamp,
    smena?: Smena,
    ucesnik?: Ucesnik
    // ime: string,
    // prezime: string,
    // email: string,
    // telefon: string
}

export function newUplata(): Uplata {
    return {
        iznos_rsd: '',
        iznos_eur: ''
        // ime: '',
        // prezime: '',
        // email: '',
        // telefon: ''
    };
}
export function uplataFormGroup(fb: FormBuilder, uplata: Uplata): FormGroup {
    return fb.group({
        iznos_rsd: [''],
        iznos_eur: [''],
        ucesnik_id: [''],
        status_uplate_id: [''],
        kamp_id: [''],
        smena_id: [''],
        datum_uplate: [''],
        depozit: ['']
    })
}