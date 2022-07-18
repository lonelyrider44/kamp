import { PrijavaPregledParametar } from "./prijava-pregled-parametar";

export interface PrijavaPregled {
    id?: number,
    prijava_id: number,
    datum_pregleda: string,
    napomena: string,

    parametri?: PrijavaPregledParametar[]
}
