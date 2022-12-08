export interface Accomplishment {
    accomplishment: string;
    category: string;
    proof: string;

}

export class Accomplishment implements Accomplishment{

    constructor(
        public accomplishment: string,
        public category: string,
        public proof: string
    ) {
        this.accomplishment = accomplishment;
        this.category = category;
        this.proof = proof;
    }
}
