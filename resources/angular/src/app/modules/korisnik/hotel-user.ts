import { FormBuilder, FormGroup } from "@angular/forms";

export interface HotelUser {
    id?: number,
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
}

export function newHotelUser(): HotelUser {
    return {
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
    };
}
export function hotelUserFormGroup(fb: FormBuilder, hotelUser: HotelUser): FormGroup {
    return fb.group({
        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],
        password: [''],
        password_confirmation: [''],
    })
}