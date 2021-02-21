import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
