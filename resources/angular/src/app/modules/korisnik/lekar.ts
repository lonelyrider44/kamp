import { FormBuilder, FormGroup } from "@angular/forms";

export interface Lekar {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
    // majica: string,
    // duks: string,
    // sorc: string,
    // trenerka: string,
    // koordinator: string
}

export function newLekar(): Lekar {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
    };
}
export function lekarFormGroup(fb: FormBuilder, lekar: Lekar): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
    })
}