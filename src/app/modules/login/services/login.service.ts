import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfor, SearchUser, responseAuth } from '../../../interfaces/user.interface';

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

  authentication(user: SearchUser): Observable<responseAuth>{
    const url = `${this.apiUrl}/users/getUserByAuthentication`;
    return this.http.post<responseAuth>(url, user)
  }


}
