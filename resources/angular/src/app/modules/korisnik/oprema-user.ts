import { FormBuilder, FormGroup } from "@angular/forms";

export interface OpremaUser {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
}

export function newOpremaUser(): OpremaUser {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
    };
}
export function opremaUserFormGroup(fb: FormBuilder, opremaUser: OpremaUser): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
    })
}