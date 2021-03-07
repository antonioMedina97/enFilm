import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket, TicketList, User } from 'src/app/interfaces/interfaces';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { EntradaComponent } from '../entrada/entrada.component';
@Component({
  selector: 'app-lista-entradas',
  templateUrl: './lista-entradas.component.html',
  styleUrls: ['./lista-entradas.component.scss']
})
export class ListaEntradasComponent implements OnInit {

  
    ticketList:[];
  
  userAutenticado: User;


  constructor(private ticketService: TicketService,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.userService.getUsuarioAutenticado().subscribe(user =>{
      if(user == null){
        this.router.navigate(['/login']);
      }
      else{
        this.userAutenticado = user;
      }
    });

    this.ticketService.getTicketByUser().subscribe(
      data => {
        this.ticketList = data['tickets'];
      }
    )

  }

}
