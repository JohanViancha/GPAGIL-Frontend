import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserInfor, SearchUser, responseAuth } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: UserInfor[] = [];

  user: SearchUser = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  authentication() {
    console.log(this.user)
    
    this.loginService.authentication(this.user)
      .subscribe((user:responseAuth) => {
        if (user.state === 'correct') {  

          this.router.navigate(['/plataform'])
          sessionStorage.setItem('userSe',JSON.stringify(user));
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
        console.log(user);

      }, (error => {
        console.log(error);


      }))
  }



}
