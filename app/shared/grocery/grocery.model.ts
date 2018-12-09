export class Overgruppe {
    constructor(
        public id: string, 
        public titel: string,
        public beskrivelse: string,
        public image_url: string,
        public har_undergrupper: boolean,
    ) { }
}

export class Undergruppe {
    constructor(
        public id: string, 
        public titel: string,
    ) { }
}