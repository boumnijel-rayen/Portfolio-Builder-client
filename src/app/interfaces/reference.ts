export interface Reference {
    jobTitle: string;
    email: string;
    phone: string;
    title: string;
}

export class Reference implements Reference {
    constructor(
        public jobTitle: string,
        public email: string,
        public phone: string,
        public title: string
    ) {
        this.jobTitle = jobTitle;
        this.email = email;
        this.phone = phone;
        this.title = title;
    }
}