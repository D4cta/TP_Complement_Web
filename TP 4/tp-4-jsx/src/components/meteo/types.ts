

export enum MeteoCondition{
    Rain,
    Cloud,
    Sun
}

export type Meteodata = {
    temperature : number,
    condition: MeteoCondition, 
    date: Date

}
