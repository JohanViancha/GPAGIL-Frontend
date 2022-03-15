import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserInfor, SearchUser, ResponseAuth } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


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

  constructor(private loginService: LoginService, private router: Router) { }

  authentication() {    
    this.loginService.authentication(this.user)
      .subscribe((userRe: ResponseAuth) => {
        if (userRe.state === 'correct') {  

          this.resp = JSON.parse(JSON.stringify(userRe.user),function (k,v) {
            if(k !== 'password_user') return v;
          });
          
          localStorage.setItem('userSe',JSON.stringify(this.resp));          
          this.router.navigate(['/plataform'])
        }
        else if(userRe.state === 'requerid'){
          this.alert('Error', 'Todos los campos son obligatorios');
        }
      }, (error => {
        this.alert('Error', 'Todos los campos son obligatorios');
      }))
  }

  dataLocalStorage(): UserInfor{
    return JSON.parse(localStorage.getItem('userSe')!);
  }

  alert(state: string, msg: string) {
    switch (state) {
      case 'Correcto':
        Swal.fire({
          title: state,
          text: msg,
          icon: 'success'
        })
        break;
      case 'Error':
        Swal.fire({
          title: state,
          text: msg,
          icon: 'error'
        })
        break;
    }


  }


}
