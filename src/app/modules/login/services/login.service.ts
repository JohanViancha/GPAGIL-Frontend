import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfor, SearchUser, ResponseAuth } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.baseUrl;

 
  constructor(private http: HttpClient) { }

  
  mostrar(): Observable<UserInfor[]>{
    const url = `${this.apiUrl}/users/getUsersAll`;    
    return this.http.get<UserInfor[]>(url);    
  }

  authentication(user: SearchUser): Observable<ResponseAuth>{
    const url = `${this.apiUrl}/users/getUserByAuthentication`;
    return this.http.post<ResponseAuth>(url, user);
  }


}
