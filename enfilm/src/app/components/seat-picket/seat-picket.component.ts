import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket, User } from 'src/app/interfaces/interfaces';
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seat-picket',
  templateUrl: './seat-picket.component.html',
  styleUrls: ['./seat-picket.component.scss']
})
export class SeatPicketComponent implements OnInit {

  userAutenticado: User;
  ticketList: Ticket[];
  movie_id: number;
  dateSTR: string;
  selectedTickets: number[] = [];


  constructor(private actRoute: ActivatedRoute,
    private ticketService: TicketService,
    private autenticadorJwt: AutenticadorJwtService,
    private userService: UserService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {

    
    this.userService.getUsuarioAutenticado().subscribe(user =>{
      if(user == null){
        this.router.navigate(['/login']);
      }
      else{
        this.userAutenticado = user;
      }
    });


    this.movie_id = parseInt(this.actRoute.snapshot.queryParamMap.get('id'));
    this.dateSTR = this.actRoute.snapshot.queryParamMap.get('datetime');


    this.updateTicketList();

    console.log(this.ticketList);


  }

  onValChange(value) {



    if (this.selectedTickets.length === 0) {
      console.log('primer ticket add');
      this.selectedTickets.push(value);
    }
    else {


      for (let id of this.selectedTickets) {
        console.log('array at start of every loop');
        console.log(this.selectedTickets);


        if (value === id) {
          let index = this.selectedTickets.indexOf(id);
          this.selectedTickets.splice(index, 1);

          console.log('ticket borrado');
          return;
        }

      }
      console.log('ticket add')
      this.selectedTickets.push(value);
    }
    console.log(this.selectedTickets);

  }

  updateTicketList() {

    this.ticketService.getDatesbyIdMovieAndDate(this.movie_id, this.dateSTR).subscribe(
      data => {
        console.log(data);
        this.ticketList = data["ticket"];

      })

  }

  buyTickets() {

    

    this.selectedTickets.forEach(ticket => {

      this.ticketService.buyTicket(ticket, this.userAutenticado.id).subscribe(
        data => {
          console.log(data)
        }
      )
    });


    this.router.navigate(['/listaEntradas'])

  }

  volver(){
    this.location.back()
  }

}
