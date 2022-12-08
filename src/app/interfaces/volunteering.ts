export interface Volunteering {
    name: string;
    description: string;
}

export class Volunteering implements Volunteering {
    constructor(
        public name: string,
        public description: string
    ) {
        this.name = name;
        this.description = description;
    }
}