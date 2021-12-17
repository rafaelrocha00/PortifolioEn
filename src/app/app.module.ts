import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainGamesPageComponent } from './main-games-page/main-games-page.component';
import { DefensorDaHortaPaginaComponent } from './defensor-da-horta-pagina/defensor-da-horta-pagina.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainGamesPageComponent,
    DefensorDaHortaPaginaComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
