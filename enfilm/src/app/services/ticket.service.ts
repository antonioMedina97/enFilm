import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Ticket } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TicketService {




  constructor(private http: HttpClient) { }

  getDatesbyIdMovieAndDate(id_movie: number, datetime: string){

    console.log('getDatesByIdMovie called');

    return this.http.get<Ticket[]>('/ticket/movieAndDate?id_movie=' + id_movie + '&datetimeSTR=' + datetime).pipe(
      tap(data=> console.log(data))
    );
  }

  createNewShow(theatre: number, movie: number, datetime: string){
    let datetimeSTR = Date.parse(datetime).toString();
    var dto = {
      "theatre": theatre,
      "movie": movie,
      "datetime": datetimeSTR
    }
    console.log(dto);

   return this.http.put<string>("/tickets/newShow", dto);
  }
}
