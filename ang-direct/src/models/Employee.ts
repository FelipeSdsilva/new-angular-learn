export class Employee {

    id: number;
    name: string;
    email: string;
    phone: string;
    TIN: string;
    numberHouse: number;
    password: string;
    dateOfBirth: string;
    hireDate: string;


    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        TIN: string,
        numberHouse: number,
        password: string,
        dateOfBirth: string,
        hireDate: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.TIN = TIN;
        this.numberHouse = numberHouse;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.hireDate = hireDate;
    }
}