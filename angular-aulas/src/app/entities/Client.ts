export class Client {

    private id: number;
    private name: string;
    private birthday: string;
    private password: string;

    constructor(name: string, birthday: string, password: string) {
        this.name = name;
        this.birthday = birthday;
        this.password = password;
    }

    public getName(){
        return this.name;
    }

}