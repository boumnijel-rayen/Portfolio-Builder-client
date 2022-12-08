export interface SocialMedia {
    name: string;
    link: string;
}

export class SocialMedia implements SocialMedia {
    constructor(public name: string,public link: string) {
        this.name = name;
        this.link = link;
    }
}
