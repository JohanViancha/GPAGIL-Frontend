import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { RegisterUser } from 'src/app/interfaces/user.interface';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userObj: RegisterUser = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  }

  constructor(private registerService: RegisterService) { }

  registerUser() {
    this.registerService.registerUser(this.userObj)
      .subscribe((userRe) => {
        if (userRe.state === 'correct') {
          console.log('correcto')
          this.alert('Correcto', 'Registrado correctamente');

        } else if (userRe.state === 'requerid') {
          this.alert('Error', 'Todos los campos son obligatorios');
        }
      }, (error => {
        this.alert('Error', 'Todos los campos son obligatorios');
      }))


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
