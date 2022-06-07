import { FormBuilder, FormGroup } from "@angular/forms";

export interface Uplata {
    id?: number,
    iznos_rsd: string,
    iznos_eur: string
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
        prijava_id: [''],
        smena_id: [''],
    })
}