import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './pages/sidebar.component';



const route:Routes = [
  {path:'' , component:SidebarComponent, loadChildren:()=> import('./plataform.module')
    .then(m=> m.PlataformModule)}
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ]
})
export class PlataformRoutingModule { }
