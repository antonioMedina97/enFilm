import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Movie, MoviesList } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  getMoviesList(){
    console.log("desde movie service");
    
    return this.http.get<MoviesList>('/movie/list').pipe(
      tap(data => console.log(data)),
    );
  }

  getMovieById(id){

    return this.http.get<Movie>('/movie/byId?id='+id).pipe(
      tap(data => console.log(data))
    );

  }

}
