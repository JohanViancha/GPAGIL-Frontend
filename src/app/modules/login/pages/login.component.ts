import { Component} from '@angular/core';
import { LoginService } from '../services/login.service';
import { AddUser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  users: AddUser[] = [];

   constructor() {}

//  mostrar(){
//    this.loginService.searchUser()
//    .subscribe((users) => {
//      this.users = users;
//      console.log(users);
     
//    },(error => {
//      console.log(error);
     
//    }))
//  }
  

}
