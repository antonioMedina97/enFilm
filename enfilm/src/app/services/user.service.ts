import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatosConJwt } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  autenticaUser(email: string, password: string) : Observable<DatosConJwt> {

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
}


