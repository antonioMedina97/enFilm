import { Component, OnInit, Input } from '@angular/core';
import { Movie, Ticket } from 'src/app/interfaces/interfaces';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {

  @Input('ticket') ticket: Ticket;
  movie: Movie;
 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.getMovieTitle(this.ticket.movie_id)

    console.log(this.movie);


  }

  getMovieTitle( id){

    console.log('id:');console.log(id);
    this.movieService.getMovieById(id).subscribe(
      movie => {
        console.log(movie);
        this.movie = movie['movie']}
    )


  }

}
