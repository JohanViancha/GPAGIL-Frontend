import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisterUser} from 'src/app/interfaces/user.interface';
import { Observable } from 'rxjs';
import { ResponseAuth } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  registerUser(user:RegisterUser):Observable<ResponseAuth>{
    const url = `${this.apiUrl}/users/createUser`;
    return this.http.post<ResponseAuth>(url,user);
  }
}
