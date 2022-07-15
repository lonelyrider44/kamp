import { FormBuilder, FormGroup } from "@angular/forms";

export interface Fizioterapeut {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
}

export function newFizioterapeut(): Fizioterapeut {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
    };
}
export function fizioterapeutFormGroup(fb: FormBuilder, fizioterapeut: Fizioterapeut): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
    })
}