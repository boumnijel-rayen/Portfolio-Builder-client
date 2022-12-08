export interface Certification {
    title: string;
    linkD: string;
    description: string;
}

export class Certification implements Certification {
    constructor(
        public title: string,
        public linkD: string,
        public description: string
    ) { 
        this.title = title;
        this.linkD = linkD;
        this.description = description;
    }
}