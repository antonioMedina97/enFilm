import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Ticket, TicketList, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticketListBetweenComp: Ticket[];




  constructor(private http: HttpClient) { }



  getTicketByUser(){

    return this.http.get<TicketList>('/ticket/byUser')

  }


  getDatesbyIdMovieAndDate(id_movie: number, datetime: string){

    console.log('getDatesByIdMovie called');

    return this.http.get<Ticket[]>('/ticket/movieAndDate?id_movie=' + id_movie + '&datetimeSTR=' + datetime).pipe(
      tap(data=> console.log(data))
    );
  }




  createNewSession(theatre: number, movie: number, datetime: string){

    let datetimeSTR = Date.parse(datetime).toString();

    var dto = {
      "id_theatre": theatre,
      "id_movie": movie,
      "datetime": datetimeSTR
    }
    console.log(dto);

   return this.http.post<string>('/tickets/newShow', dto);
  }

  buyTicket(id_ticket: number, id_user: number){

      let dto = {
        "id_ticket": id_ticket,
        "id_user": id_user
      }
      return this.http.put<string>('/tickets/buy', dto);

    

    

  }
}
