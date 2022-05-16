import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { UserInfor } from 'src/app/interfaces/user.interface';
import { LoginComponent } from '../../../login/pages/login.component';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { PlataformService } from '../../services/plataform.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  proyects: Project[] = [];
  userSe: UserInfor;


  constructor(private observer: BreakpointObserver, 
              private router: Router,
              private servicePlataform: PlataformService) {
    this.userSe = this.dataLocalStorage();
  }

  ngOnInit(): void {
    
    const {id_user} = JSON.parse(localStorage.getItem('userSe') || '{}');   
    this.servicePlataform.getProjectByUsuario(id_user).subscribe(response=>{
      this.proyects = response;
    })
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  dataLocalStorage(): UserInfor {
    if (localStorage.length == 0) {
      this.router.navigate(['/login'])
    }
    return JSON.parse(localStorage.getItem('userSe')!);
    
  }

  exitSesion(){
    this.router.navigate(['/login']);
    localStorage.clear();
  }

}
