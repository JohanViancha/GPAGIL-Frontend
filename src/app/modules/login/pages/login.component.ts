import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserInfor, SearchUser, ResponseAuth } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlertsService } from 'src/app/core/alerts.service';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resp: string = '';

  user: SearchUser = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, 
              private router: Router,
              private alertService: AlertsService) { }

  authentication() {    

    this.alertService.loading();

    this.loginService.authentication(this.user)
      .subscribe((userRe: ResponseAuth) => {
        Swal.close();
        if (userRe.state === 'correct' && 
            userRe.user?.password_user == this.user.password ) {  

          localStorage.setItem('userSe',JSON.stringify(userRe.user));          
          this.router.navigate(['/plataform'])
        }
        else if(userRe.state === 'requerid'){
          this.alertService.showAlert('Error', 'Todos los campos son obligatorios');
        }else{
          this.alertService.showAlert('Error', 'El usuario y/o contraseña son incorrectos');
        }
      }, (error => { 

       console.log(error);
          
      }))
  }

  dataLocalStorage(): UserInfor{
    return JSON.parse(localStorage.getItem('userSe')!);
  }

}
