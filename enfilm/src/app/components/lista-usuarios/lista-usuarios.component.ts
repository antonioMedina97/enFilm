import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import { ComunicacionDeAlertasService } from 'src/app/services/comunicacion-de-alertas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  userAutenticado: User;

  columnsName = ['Nombre', 'Apellidos', 'Email', 'Teléfono', 'Acciones'];

  listUsers: [] = [];

  dataSourceUsers = new MatTableDataSource<User>(this.listUsers);


  constructor(
    private userService: UserService,
    private router: Router,
    private comunicacionAlertas: ComunicacionDeAlertasService,

  ) { }

  ngOnInit(): void {


    this.userService.getUsuarioAutenticado().subscribe(user =>{
      if(user == null ){

        this.router.navigate(['/login']);
      }
      else if(user.role != 1){
        
        this.comunicacionAlertas.abrirDialogError('No está autorizado');

        this.router.navigate(['/movies']);

      }
    });

    this.updateListaUsers();


  }

  updateListaUsers(){
    this.userService.getAllUsersEstandar().subscribe(
      data=> {
        this.listUsers = data['user'];
        
        console.log()
        this.dataSourceUsers = new MatTableDataSource(this.listUsers);

      }
    )
  }


  cambiarDatosUser(id){

    this.router.navigate(['/updateUser'], {queryParams: {id: id}})

  }

  deleteUser(id){

    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      if(data['result'] == 'fail'){
        this.comunicacionAlertas.abrirDialogError('Algo ha fallado, no se pudo borrar el usuario');
      }
      else{

        this.updateListaUsers()
      }
    }
      
    );

  }
}
