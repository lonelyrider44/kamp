import { FormBuilder, FormGroup } from "@angular/forms";

export interface Trener {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string
}

export function newTrener(): Trener {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: ''
    };
}
export function trenerFormGroup(fb: FormBuilder, trener: Trener): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
        majica: [''],
        sorc: [''],
        duks: [''],
        trenerka: [''],
    })
}