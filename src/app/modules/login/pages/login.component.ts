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

   constructor(private loginService: LoginService) {}

 mostrar(){
   this.loginService.buscar()
   .subscribe(users => {
     this.users = users;
   },(err) => {
     console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
     
     console.log(err);
     
   })
 }
  

}
