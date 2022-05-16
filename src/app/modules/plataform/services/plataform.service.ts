import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Project } from 'src/app/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class PlataformService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProjectByUsuario(id:number):Observable<Project[]>{
    const url = `${this.apiUrl}/projects/getProjectByUsuario`;
    return this.http.post<Project[]>(`${url}`, {'idUsuario': id});
  }

}
