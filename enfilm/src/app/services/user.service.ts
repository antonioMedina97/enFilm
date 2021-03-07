import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatosConJwt, User } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  userAutenticado: User;
  @Output()
  cambiosEnUserAutenticado = new EventEmitter<User>();


  constructor(private http: HttpClient) { }

  autenticaUser(email: string, password: string): Observable<DatosConJwt> {

    var jsonObject = {
      email: email,
      password: password
    }

    return this.http.post<DatosConJwt>('/user/autentica', jsonObject).pipe(
      tap(data => {
        // console.log('desde tap muwenas' + data);
      }
      )
    );
  }

  /**
 * Permite obtener un usuario autenticado en el servidor.
 */
  getUsuarioAutenticado(): Observable<User> {
    // Petición para obtener el usuario autenticado, funcionará porque se envía el JWT en 
    // cada petición, gracias al HttpInterceptor
    return this.http.get<User>('/user/getUserAutenticado')
      .pipe(
        tap(userAutenticado => {
          // En la condición del if intento detectar varios casos que provocan un cambio en 
          // el usuario autenticado
          if ((this.userAutenticado == null && userAutenticado != null) || // No había usuario autenticado y ahora sí lo hay - Autenticación
            (this.userAutenticado != null && userAutenticado == null) ||  // Había usuario autenticado y ya no lo hay - Cierre de sesión
            (this.userAutenticado != null && userAutenticado == null && this.userAutenticado.id != userAutenticado.id)) { // Cambio de usuario autenticado
            this.emitirNuevoCambioEnUsuarioAutenticado();
            this.userAutenticado = userAutenticado;
          }
        })
      );
  }

  getUsuarioAutenticadoId(): Observable<User>{
    return this.http.get<User>('/user/getId');
  }

  /**
   * Es un método que podrá llamarse para permitir que cualquiera, que esté subscrito a 
   * this.cambiosEnUsuarioAutenticado, sepa que el usuario autenticado ha cambiado.
   */
  emitirNuevoCambioEnUsuarioAutenticado() {
    this.getUsuarioAutenticado().subscribe(usuarioAutenticado => {
      this.cambiosEnUserAutenticado.emit(usuarioAutenticado);
    });
  }

  

  /**
   * Comprueba si una determinada contraseña es igual a la del usuario autenticado
   */
  ratificaPasswordUsuarioAutenticado (password: string) : Observable<object> {
    var dto = {
      'password': password
    };
    return this.http.post<object>('/usuario/ratificaPassword', dto);
  }


   /**
   * Cambia la contraseña de un usuario por otra nueva
   */
  cambiaPasswordUsuarioAutenticado (nuevaPassword: string) : Observable<object> {
    var dto = {
      'password': nuevaPassword
    };
    return this.http.post<object>('/usuario/modificaPassword', dto);
  }

  

  /**
   * Envia los datos de un usuario al servidor para su guardado
   */
  actualizaDatosUsuario (user: User) {  
    return this.http.post<String>('/user/update', user)
    .pipe (
      tap(strResult => {
          
      }));
  }

  newUser(dto){
    return this.http.post<String>('/user/new', dto)
    .pipe(

    )
  }


  getUserById(id): Observable<User>{
    return this.http.get<User>('/user/byId?idUser=' + id)
  }


  getAllUsersEstandar(){
    return this.http.get('/user/allEstandar')
  }

  deleteUser(id){

    console.log(id);
    return this.http.delete<object>('/user/delete?idUser='+ id)

  }
}


