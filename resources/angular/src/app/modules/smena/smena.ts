import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface Smena {
    id: any
    kamp_id: any,
    naziv: any,
    datum_od: any,
    datum_do: any,
    broj_prijava: any,
    cena: any,
}

export function newSmena(): Smena{
    return {
        id: '',
        kamp_id: '',
        naziv: '',
        datum_od: '',
        datum_do: '',
        broj_prijava: '',
        cena: '',
      };
}
export function smenaFormGroup(fb: FormBuilder, smena: Smena): FormGroup{
    return fb.group({
        kamp_id: [smena.kamp_id],
        naziv: [smena.naziv],
        datum_od: [smena.datum_od],
        datum_do: [smena.datum_do],
        broj_prijava: [smena.broj_prijava],
        // status: [smena.status],
        cena: [smena.cena],
        broj_smena: ''
      })
    
}
