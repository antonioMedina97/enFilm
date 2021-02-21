import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { AutenticadorJwtService } from 'src/app/services/autenticador-jwt.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  loginForm: FormGroup
  hidePassword: boolean = true;
  
  constructor(private userService: UserService, private router: Router,
    private autenticadorJwtService: AutenticadorJwtService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('ma@il.com', [Validators.required]),
      password: new FormControl('1234', [Validators.required])
    });
  }

  autenticaUser(){
    this.userService.autenticaUser(this.loginForm.controls.email.value,
        this.loginForm.controls.password.value).subscribe(data => {
           if(data.jwt != undefined){
             this.autenticadorJwtService.almacenaJWT(data.jwt);
             this.router.navigate(['']);
             console.log(data.jwt)
           }
           else{
             console.log('No makina');
           }
        })
  }

}
