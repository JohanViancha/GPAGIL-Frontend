import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUser } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = 'https://restapi-gpagil.herokuapp.com/api';

 
  constructor(private http: HttpClient) { }


<<<<<<< HEAD
  buscar(): Observable<AddUser[]>{
    const url = `${this.apiUrl}/users/getUsersAll`;
    return this.http.get<AddUser[]>(url);

  }
=======
   searchUser(): Observable<AddUser[]>{

     const url = `${this.apiUrl}/users/getUsersAll`;
    
     return this.http.get<AddUser[]>(url);    
   }
>>>>>>> a0f547cfe8b7f7788904d6f4c27b3d3bb268f4bc

}
