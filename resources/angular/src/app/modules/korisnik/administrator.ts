import { FormBuilder, FormGroup } from "@angular/forms";

export interface Administrator {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string
}

export function newAdministrator(): Administrator {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: ''
    };
}
export function administratorFormGroup(fb: FormBuilder, admin: Administrator): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
    })
}
