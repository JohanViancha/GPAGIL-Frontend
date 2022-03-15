import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { UserInfor } from 'src/app/interfaces/user.interface';
import { LoginComponent } from '../../../login/pages/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  proyects: string[] = ['GPAGIL', 'Drawcreate'];
  userSe: UserInfor;


  constructor(private observer: BreakpointObserver, private router: Router) {
    this.userSe = this.dataLocalStorage();
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
