import { FormBuilder, FormGroup } from "@angular/forms";

export interface Prevoznik {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
}

export function newPrevoznik(): Prevoznik {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
    };
}
export function prevoznikFormGroup(fb: FormBuilder, prevoznik: Prevoznik): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
        // majica: [''],
        // sorc: [''],
        // duks: [''],
        // trenerka: [''],
        // koordinator: ['']
    })
}