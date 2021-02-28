import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/interfaces';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-seat-picket',
  templateUrl: './seat-picket.component.html',
  styleUrls: ['./seat-picket.component.scss']
})
export class SeatPicketComponent implements OnInit {

  ticketList: Ticket[];
  movie_id: number;
  dateSTR: string;
  selectedTickets: number[] = [];


  constructor(private actRoute: ActivatedRoute,
    private ticketService: TicketService) { }

  ngOnInit(): void {

    this.movie_id = parseInt( this.actRoute.snapshot.queryParamMap.get('id') );
    this.dateSTR = this.actRoute.snapshot.queryParamMap.get('datetime');
    console.log(this.movie_id);
    console.log(this.actRoute.snapshot.queryParamMap.get('datetime'));

    this.updateTicketList();

    console.log(this.ticketList);
    
    
  }

  onValChange(value){

    console.log('evento de boton');
    

    if(this.selectedTickets.length === 0){
      console.log('primer ticket add');
      this.selectedTickets.push(value);
    }
    else{

    
    for ( let id of this.selectedTickets) {
      console.log('array at start of every loop');
      console.log(this.selectedTickets);

  
      if (value === id) {
        let index = this.selectedTickets.indexOf(id);
        this.selectedTickets.splice(index,1);
     
        console.log('ticket borrado');
       return;
      }

    }
    console.log('ticket add')
    this.selectedTickets.push(value);
  }
  console.log(this.selectedTickets);

  }

  updateTicketList(){

    this.ticketService.getDatesbyIdMovieAndDate(this.movie_id, this.dateSTR).subscribe(
      data => {
        console.log(data);
        this.ticketList = data["ticket"];
      
    })

  }

  buyTickets(){
    let price = this.selectedTickets.length * 4;

    alert(price);
    for (const ticket of this.selectedTickets) {
      console.log(ticket);
    }
  }


}
