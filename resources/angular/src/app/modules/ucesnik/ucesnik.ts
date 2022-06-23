import { FormBuilder, FormGroup } from "@angular/forms";

export interface Ucesnik {
    id?: any,
    kamp_id?: any,
    ucesnik_id?: any,
    ime_roditelja: any,
    prezime_roditelja: any,
    email_roditelja: any,
    telefon_roditelja: any,

    ime: any,
    prezime: any,
    email: any,
    telefon: any,

    pol: any,
    pol_id?: number,
    datum_rodjenja: any,
    jmbg_pasos: any,

    adresa: any,
    mesto: any,
    drzava: any,

    visina: any,
    tezina: any,

    alergije: any,
    zdravstveni_problem: any,

}

export function newUcesnik(): Ucesnik {
    return {
        ime_roditelja: '',
        prezime_roditelja: '',
        email_roditelja: '',
        telefon_roditelja: '',

        ime: '',
        prezime: '',
        email: '',
        telefon: '',

        pol: '',
        pol_id: null,
        datum_rodjenja: '',
        jmbg_pasos: '',

        adresa: '',
        mesto: '',
        drzava: '',

        visina: '',
        tezina: '',

        alergije: '',
        zdravstveni_problem: '',

    };
}
export function ucesnikFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        kamp_id: [''],
        ime_roditelja: [''],
        prezime_roditelja: [''],
        email_roditelja: [''],
        telefon_roditelja: [''],

        ime: [''],
        prezime: [''],
        email: [''],
        telefon: [''],

        pol: [''],
        pol_id: [''],
        datum_rodjenja: [''],
        jmbg_pasos: [''],

        adresa: [''],
        mesto: [''],
        drzava: [''],

        visina: [''],
        tezina: [''],

        alergije: [''],
        zdravstveni_problem: [''],

        majica: [''],
        sorc: [''],
        duks: [''],
        trenerka: [''],

        napomena_smestaj: [''],
        napomena_hrana: [''],
        napomena_alergije: [''],
        napomena_zdravstveni_problemi: [''],

        tip_prevoza_id: [''],
        organizovani_prevoz: [''],

        broj_sobe: [''],
        saglasnost_politika_privatnosti: [''],
        saglasnost_obrada_podataka: [''],
        saglasnost_ucesce_na_kampu: [''],
        saglasnost_donatorski_ugovor: [''],
        saglasnost_pravila_kampa: [''],

        smene: fb.array([]),
        dodatni_paketi: fb.array([]),

        status_id: [''],
        trener_id: [''],

        donosi_depozit_u_kamp: [''],
        gratis: [''],
        opstina: [''],

        depozit_rsd: [''],
        smene_rsd: [''],
        dodatni_paketi_rsd: [''],
        ukupno_rsd: [''],

        depozit_eur: [''],
        smene_eur: [''],
        dodatni_paketi_eur: [''],
        ukupno_eur: [''],
    })
}

