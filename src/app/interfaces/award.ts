export interface Award {
    title: string;
    level: string;
    date: string;
    proof: string;
}

export class Award implements Award {
    constructor(
        public title: string,
        public level: string,
        public date: string,
        public proof: string
    ) {
        this.title = title;
        this.level = level;
        this.date = date;
        this.proof = proof;
    }
}
