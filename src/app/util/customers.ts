export class Customerdummy {
    id: string;
    name: string;
    location: string;
    address: string;
    contact: string;
    constructor(n: string){
        this.name = n;
        this.location = "https://maps.app.goo.gl/WH9SNM7BQdiZhoYPA";
        this.address = "Bengaluru";
        this.contact = "9686654061";
        this.id = "20";
    }
  }
  export class Customer{
    id: number;
    name: string;
    location: string;
    address: string;
    contact: string;
    altContact: string;
    area: string;
    businessType: string;
    otherDetails: string;

    constructor(){
    }
  }