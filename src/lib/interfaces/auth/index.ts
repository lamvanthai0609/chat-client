export interface ILogin {
    username: string;
    password: string;
}

export interface IUser {
    _id: string;
    username: string;
    name: string;
    email: string;
    numberPhone?: string;
    image?: string;
    address?: Array<string>;
    role: string;
}
