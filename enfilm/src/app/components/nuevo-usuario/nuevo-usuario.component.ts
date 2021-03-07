import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ComunicacionDeAlertasService } from 'src/app/services/comunicacion-de-alertas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {


  userForm: FormGroup;
  hidePassword: boolean = true;
  editedUser: User;

  constructor( 
    private userService: UserService,
    private comunicador: ComunicacionDeAlertasService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      payment: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]),
      password: new FormControl('', [Validators.required]),
    });

    

  }



  registrar(){

    var dto = {
      'email': this.userForm.controls.email.value,
      'name': this.userForm.controls.name.value,
      'surname': this.userForm.controls.surname.value,
      'phone' :  this.userForm.controls.phone.value,
      'payment' : this.userForm.controls.payment.value,
      'password' : this.userForm.controls.password.value,
      'role': 2
    };

    this.userService.newUser(dto).subscribe(
      data => { 
        if(data['result'] == 'ok'){
          alert('Registrado correctamente');
          this.router.navigate(['/login']);
        }
        else{
          alert('No se ha podido registrar. Inténtelo más tarde');
        }
        }
    )

  }

  cancelar(){

    this.router.navigate(['/login']);

  }
}
