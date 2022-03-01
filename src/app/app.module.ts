import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './shared/shared.module';
import { PlataformModule } from './modules/plataform/plataform.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PlataformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
