import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';
import { ComunicacionDeAlertasService } from 'src/app/services/comunicacion-de-alertas.service'
import { UserService } from 'src/app/services/user.service';
import { DialogTypes } from '../dialogo-general/dialog-data-type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userAutenticado: User;

  constructor(private autenticadorJwtService: AutenticadorJwtService,
    private router: Router,
    private comunicacionAlertasService: ComunicacionDeAlertasService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.userService.cambiosEnUserAutenticado.subscribe(newUserAutenticado => {
      this.userAutenticado = newUserAutenticado;
    });

  }

  
  navigateIndex(){
    this.router.navigate(['/movies']);
  }

  listaEntradas(){
    this.router.navigate(['/listaEntradas'])
  }

  listaUsuarios(){
    this.router.navigate(['/listaUsuarios'])
  }


    /**
   * Confirmación de que deseamos abandonar la sesión
   */
  confirmacionAbandonarSesion() {
    this.comunicacionAlertasService.abrirDialogConfirmacion ('¿Realmente desea abandonar la sesión?').subscribe(opcionElegida => {
      if (opcionElegida == DialogTypes.RESPUESTA_ACEPTAR) {
        this.autenticadorJwtService.eliminaJWT();
        this.userAutenticado = null;
        this.router.navigate(['/login']);
      }
    });
  }

  navegarHaciaDatosPersonales(){
    this.router.navigate(['/updateUser'], {queryParams: {id: this.userAutenticado.id}})
  }
}
