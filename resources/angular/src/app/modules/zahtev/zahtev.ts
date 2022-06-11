import { FormBuilder, FormGroup } from "@angular/forms";
import { Kamp } from "../kamp/kamp";
import { Roditelj } from "../roditelj/roditelj";
import { Smena } from "../smena/smena";
import { Ucesnik } from "../ucesnik/ucesnik";
import { StatusZahteva } from "./status-zahteva";

export interface Zahtev {
    id?: number,
    zahtev: string,
    odgovor?: string,
    status_id: number,
    roditelj_id: string,
    ucesnik_id: string|null,
    kamp_id: string|null,
    smena_id: string|null,
    roditelj?: Roditelj,
    ucesnik?: Ucesnik,
    status_zahteva?: StatusZahteva,
    kamp?: Kamp,
    smena?: Smena
}

export function newZahtev(): Zahtev {
    return {
        zahtev: '',
        odgovor: '',
        status_id: 1,
        roditelj_id: '',
        ucesnik_id: '',
        kamp_id: '',
        smena_id: '',
    };
}
export function zahtevFormGroup(fb: FormBuilder, zahtev: Zahtev): FormGroup {
    return fb.group({
        zahtev: [''],
        odgovor: [''],
        status_id: [''],
        roditelj_id: [''],
        ucesnik_id: [''],
        kamp_id: [''],
        smena_id: [''],
    })
}
export function odgovorFormGroup(fb: FormBuilder, zahtev: Zahtev): FormGroup {
    return fb.group({
        // zahtev: [''],
        odgovor: [''],
        status_id: [''],
        // roditelj_id: [''],
        // ucesnik_id: [''],
        // kamp_id: [''],
        // smena_id: [''],
    })
}