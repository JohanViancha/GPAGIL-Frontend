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

<<<<<<< HEAD
   constructor(private loginService: LoginService) {}

 mostrar(){
   this.loginService.buscar()
   .subscribe(users => {
     this.users = users;
   },(err) => {
     console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
     
     console.log(err);
     
   })
=======
   constructor(private loginService : LoginService) {}

 mostrar(){
   this.loginService.searchUser()
   .subscribe((users) => {
     this.users = users;
     console.log(users);
     
   },(error => {
     console.log(error);
     
   }))
>>>>>>> a0f547cfe8b7f7788904d6f4c27b3d3bb268f4bc
 }
  

}
