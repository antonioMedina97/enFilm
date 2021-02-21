import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';
import { ComunicacionDeAlertasService } from 'src/app/services/comunicacion-de-alertas.service'
import { DialogTypes } from '../dialogo-general/dialog-data-type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  constructor(private autenticadorJwtService: AutenticadorJwtService,
    private router: Router,
    private comunicacionAlertasService: ComunicacionDeAlertasService) { }

  ngOnInit(): void {
  }

  
  navigateIndex(){
    this.router.navigate(['/index']);
  }

    /**
   * Confirmación de que deseamos abandonar la sesión
   */
  confirmacionAbandonarSesion() {
    this.comunicacionAlertasService.abrirDialogConfirmacion ('¿Realmente desea abandonar la sesión?').subscribe(opcionElegida => {
      if (opcionElegida == DialogTypes.RESPUESTA_ACEPTAR) {

        this.router.navigate(['/login']);
      }
    });
  }

  navegarHaciaDatosPersonales(){
    
  }
}
