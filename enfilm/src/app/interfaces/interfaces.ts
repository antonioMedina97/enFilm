export interface DatosConJwt{
    jwt: string;
}

// Datos de un usuario
export interface Usuario {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    payment: string;
    phone: string;
    role: number;
}