import { FormBuilder, FormGroup } from "@angular/forms";

export interface Kamp {
    id: any

    lokacija_id: any,
    naziv: any,
    datum_od: any,
    datum_do: any,
    broj_prijava: any,
    status: any, 
    cena: any
}

export function newKamp(): Kamp{
    return {
        id: '',
        lokacija_id: '',
        naziv: '',
        datum_od: '',
        datum_do: '',
        broj_prijava: '',
        status: '',
        cena: ''
      };
}
export function kampFormGroup(fb: FormBuilder, kamp: Kamp): FormGroup{
    return fb.group({
        lokacija_id: [kamp.lokacija_id],
        naziv: [kamp.naziv],
        datum_od: [kamp.datum_od],
        datum_do: [kamp.datum_do],
        broj_prijava: [kamp.broj_prijava],
        // status: [kamp.status],
        cena: [kamp.cena]
      })
    
}
