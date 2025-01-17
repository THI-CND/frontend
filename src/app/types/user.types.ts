export interface UserResponseV1 {
    Username: string;
    FirstName: string;
    LastName: string;
}

export interface UserResponseV2 {
    username: string;
    firstname: string;
    lastname: string;
}

export interface AuthResponseV1 {
    jwt: string;
}
