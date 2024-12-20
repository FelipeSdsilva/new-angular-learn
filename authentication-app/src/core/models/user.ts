export interface User {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    mobilephone: string;
    email: string;
    password?: string;
    token: string;
}
