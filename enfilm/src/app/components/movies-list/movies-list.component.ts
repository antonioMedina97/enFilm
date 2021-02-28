import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateList, Movie, MoviesList, User } from 'src/app/interfaces/interfaces';
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';
import { MovieService } from 'src/app/services/movie.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  //Usuario en de la sesión actual
  userAutenticado: User;
  movieList: MoviesList = {
    movies:[]
  };



  

  constructor( 
    private movieService: MovieService,
    private userService: UserService,
    private ticketService: TicketService,
    private router: Router) { }

  ngOnInit(): void {

    this.userService.getUsuarioAutenticado().subscribe(user =>{
      if(user == null){
        this.router.navigate(['/login']);
      }
      else{
        this.userAutenticado = user;
      }
    });

    this.actualizaListadoPeliculas()
  }

  actualizaListadoPeliculas(){
    this.movieService.getMoviesList().subscribe(
      data => {
        console.log(data);
        this.movieList = data;
      }
    );
  }

  navigateToSeatPicker( movie_id: number, date: Date ){

    this.router.navigate(['/seats'], {queryParams: {id: movie_id, datetime: date}});

  }
  


}
