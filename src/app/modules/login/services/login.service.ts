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


  // searchUser(): Observable<AddUser[]>{

  //   const url = `${this.apiUrl}/users/getUsersAll`
    
  //   return this.http.get<AddUser[]>(url);    
  // }

}
