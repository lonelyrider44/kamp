import { FormBuilder, FormGroup } from "@angular/forms";
import { DodatniPaket } from "../dodatni-paket/dodatni-paket";
import { Kamp } from "../kamp/kamp";
import { Smena } from "../smena/smena";

export interface Prijava {
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

    majica: any,
    sorc: any,
    duks: any,
    trenerka: any,

    napomena_smestaj: any,
    napomena_hrana: any,
    napomena_alergije: any,
    napomena_zdravstveni_problemi: any,

    tip_prevoza_id: any,
    organizovani_prevoz: any,
    saglasnost_politika_privatnosti: boolean,
    saglasnost_obrada_podataka: boolean,
    saglasnost_ucesce_na_kampu: boolean,
    saglasnost_donatorski_ugovor: boolean,
    saglasnost_pravila_kampa: boolean,

    ukupno_smene_rsd?:number,
    ukupno_smene_eur?:number,
    ukupno_dodatni_paketi_rsd?:number,
    ukupno_dodatni_paketi_eur?:number,
    ukupno_rsd?:any,
    ukupno_eur?:any,
    depozit_rsd?: any,
    depozit_eur?: any,
    
    kamp?: Kamp,
    smene?: Smena[],
    dodatni_paketi?: DodatniPaket[],


    donosi_depozit_u_kamp?:boolean,
    opstina?: boolean,
    gratis?: boolean,
}

export function newPrijava(): Prijava {
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

        majica: '',
        sorc: '',
        duks: '',
        trenerka: '',

        napomena_smestaj: '',
        napomena_hrana: '',
        napomena_alergije: '',
        napomena_zdravstveni_problemi: '',

        tip_prevoza_id: null,
        organizovani_prevoz: null,
        saglasnost_politika_privatnosti: false,
        saglasnost_obrada_podataka: false,
        saglasnost_ucesce_na_kampu: false,
        saglasnost_donatorski_ugovor: false,
        saglasnost_pravila_kampa: false,

        gratis: false,
        opstina: false
    };
}
export function prijavaFormGroup(fb: FormBuilder, prijava: Prijava): FormGroup {
    return fb.group({
        kamp_id: [prijava?.kamp_id],
        ime_roditelja: [prijava.ime_roditelja],
        prezime_roditelja: [prijava.prezime_roditelja],
        email_roditelja: [prijava.email_roditelja],
        telefon_roditelja: [prijava.telefon_roditelja],

        ime: [prijava.ime],
        prezime: [prijava.prezime],
        email: [prijava.email],
        telefon: [prijava.telefon],

        pol: [prijava.pol],
        pol_id: [prijava.pol_id],
        datum_rodjenja: [prijava.datum_rodjenja],
        jmbg_pasos: [prijava.jmbg_pasos],

        adresa: [prijava.adresa],
        mesto: [prijava.mesto],
        drzava: [prijava.drzava],

        visina: [prijava.visina],
        tezina: [prijava.tezina],

        alergije: [prijava.alergije],
        zdravstveni_problem: [prijava.zdravstveni_problem],

        majica: [prijava.majica],
        sorc: [prijava.sorc],
        duks: [prijava.duks],
        trenerka: [prijava.trenerka],

        napomena_smestaj: [prijava.napomena_smestaj],
        napomena_hrana: [prijava.napomena_hrana],
        napomena_alergije: [prijava.napomena_alergije],
        napomena_zdravstveni_problemi: [prijava.napomena_zdravstveni_problemi],

        tip_prevoza_id: [prijava.tip_prevoza_id],
        organizovani_prevoz: [prijava.organizovani_prevoz],
        saglasnost_politika_privatnosti: [prijava.saglasnost_politika_privatnosti],
        saglasnost_obrada_podataka: [prijava.saglasnost_obrada_podataka],
        saglasnost_ucesce_na_kampu: [prijava.saglasnost_ucesce_na_kampu],
        saglasnost_donatorski_ugovor: [prijava.saglasnost_donatorski_ugovor],
        saglasnost_pravila_kampa: [prijava.saglasnost_pravila_kampa],

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
