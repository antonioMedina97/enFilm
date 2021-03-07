import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MoviesList } from 'src/app/interfaces/interfaces';
import { MovieService } from 'src/app/services/movie.service';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-nuevo-show',
  templateUrl: './nuevo-show.component.html',
  styleUrls: ['./nuevo-show.component.scss']
})
export class NuevoShowComponent implements OnInit {


  nuevoShow: FormGroup;
  movieList: MoviesList = {
    movies:[]
  };

  constructor(private movieService: MovieService,
              private ticketService: TicketService,) { }

  ngOnInit(): void {
    this.actualizaListadoPeliculas()

    this.nuevoShow = new FormGroup({
      theatre: new FormControl(),
      movie: new FormControl(),
      datetime: new FormControl()

    });
  }

  createNewShow(){

    console.log(this.nuevoShow.controls.theatre.value);
    console.log(this.nuevoShow.controls.theatre.value);
    console.log(this.nuevoShow.controls.datetime.value);
    console.log(Date.parse(this.nuevoShow.controls.datetime.value))

    this.ticketService.createNewSession(this.nuevoShow.controls.theatre.value, this.nuevoShow.controls.theatre.value, this.nuevoShow.controls.datetime.value).subscribe( data => {
      console.log(data)
    });
    
  }

  actualizaListadoPeliculas(){
    this.movieService.getMoviesList().subscribe(
      data => {
        console.log(data);
        this.movieList = data;
      }
    );
  }
}
