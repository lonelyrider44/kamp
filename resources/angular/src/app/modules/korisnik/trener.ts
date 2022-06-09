import { FormBuilder, FormGroup } from "@angular/forms";

export interface Trener {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
    majica: string,
    duks: string,
    sorc: string,
    trenerka: string,
    koordinator: string
}

export function newTrener(): Trener {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        majica: '',
        duks: '',
        sorc: '',
        trenerka: '',
        koordinator: ''
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
        koordinator: ['']
    })
}