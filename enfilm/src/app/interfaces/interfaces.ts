export interface DatosConJwt{
    jwt: string;
}


export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    payment: string;
    phone: string;
    role: number;
}

export interface MoviesList{
    movies: Movie[];
    
}

export interface Movie{
    id: number;
    title: string;
    image: string;
    rate: number;
    dates: Date[];
}

export interface Ticket{
    id: number;
    movie_id: number;
    seat_id: number;
    user_id: number;
    selected: boolean;
    date: Date;
    price: number;
}

export interface TicketList{
    ticketList: Ticket[];
}

export interface TicketMin{
    date: Date;
}

export interface DateList{
    dates: TicketMin[];
}

export interface Seat{
    id_theatre: number;
    id: number;
    num: number;
    taken: boolean;
}