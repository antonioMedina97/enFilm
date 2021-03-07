import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ComunicacionDeAlertasService } from 'src/app/services/comunicacion-de-alertas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateForm: FormGroup;
  hidePassword: boolean = true;
  user_id: number;
  editedUser: User;

  constructor( 
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private comunicador: ComunicacionDeAlertasService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.userService.getUsuarioAutenticado().subscribe(user =>{
      if(user == null ){

        this.router.navigate(['/login']);
      }
      else if(user.role != 1){
        
        this.comunicador.abrirDialogError('No está autorizado');

        this.router.navigate(['/movies']);

      }
    });

    this.user_id = parseInt(this.actRoute.snapshot.queryParamMap.get('id'));

    this.getUserInfo();
    
    
    this.updateForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      payment: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]),
      password: new FormControl('', [Validators.required]),
    });

    

  }

  getUserInfo(){

    if(this.user_id != null){
    this.userService.getUserById(this.user_id).subscribe(
      data => {
        if (data['result'] == 'ok') {
          
          this.editedUser = data['user'];
          console.log(this.editedUser);

          this.updateForm.controls.email.setValue(this.editedUser.email);
          this.updateForm.controls.name.setValue(this.editedUser.name);
          this.updateForm.controls.surname.setValue(this.editedUser.surname);
          this.updateForm.controls.phone.setValue(this.editedUser.phone);
          this.updateForm.controls.payment.setValue(this.editedUser.payment);
          this.updateForm.controls.password.setValue(this.editedUser.password);
        }
        else{
          this.comunicador.abrirDialogError('Fallo al encontrar usuario. Inténtelo más tarde');
        }
      });
    }

  }


  loadUserInfo(){
  }

  updateUser(){

    

    this.editedUser.email = this.updateForm.controls.email.value;
    this.editedUser.name = this.updateForm.controls.name.value;
    this.editedUser.surname = this.updateForm.controls.surname.value;
    this.editedUser.phone = this.updateForm.controls.phone.value;
    this.editedUser.payment = this.updateForm.controls.payment.value;
    this.editedUser.password = this.updateForm.controls.password.value;
    

    this.userService.actualizaDatosUsuario(this.editedUser).subscribe(
      data => { 
        if(data['result'] == 'ok'){
          alert('Actualizado correctamente');
          this.router.navigate(['/listaUsuarios']);
        }
        else{
          alert('No se ha podido actualizar');
        }
        }
    )

  }

  cancelar(){

    this.router.navigate(['/listaUsuarios']);

  }
}
