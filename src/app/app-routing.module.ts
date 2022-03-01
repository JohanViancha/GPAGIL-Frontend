import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login.component';
import { SidebarComponent } from './modules/plataform/pages/sidebar.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'plataform' , component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
