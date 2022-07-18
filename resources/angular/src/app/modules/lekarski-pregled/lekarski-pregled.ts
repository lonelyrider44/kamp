import { FormBuilder, FormGroup } from "@angular/forms";
import { Prijava } from "../prijava/prijava";
import { LekarskiPregledParametar } from "./lekarski-pregled-parametar";

export interface LekarskiPregled {
    lekar_id?: number,
    prijava_id?: number,
    datum_pregleda?: string,
    napomena?: string,
    
    parametri?: LekarskiPregledParametar[],
    prijava?: Prijava,

}

export function newLekarskiPregled(): LekarskiPregled {
    return {};
}

export function lekarskiPregledFormGroup(fb: FormBuilder, lekarskiPregled: LekarskiPregled): FormGroup {
    return fb.group({
        prezime: [{value: '', disabled: true}],
        ime: [{value: '', disabled: true}],
        pol_id: [''],
        visina: [''],
        tezina: [''],

        alergije: [''],
        zdravstveni_problem: [''],
        napomena_alergije: [''],
        napomena_zdravstveni_problemi: [''],

        smene: fb.array([]),
        dodatni_paketi: fb.array([]),
        
        pregled_obavljen: [''],
        lekar_id: [''],
        parametri_pregleda: fb.array([]),
        datum_pregleda: [''],
        napomena: [''],
    })
}

