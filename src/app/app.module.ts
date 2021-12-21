import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainGamesPageComponent } from './main-games-page/main-games-page.component';
import { DefensorDaHortaPaginaComponent } from './defensor-da-horta-pagina/defensor-da-horta-pagina.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PoucoAPoucoComponent } from './pouco-a-pouco/pouco-a-pouco.component';
import { NenhumAdeusParaNosComponent } from './nenhum-adeus-para-nos/nenhum-adeus-para-nos.component';
import { KappasQuestPaginaComponent } from './kappas-quest-pagina/kappas-quest-pagina.component';
import { ArtePaginaComponent } from './arte-pagina/arte-pagina.component';
import { SobrePaginaComponent } from './sobre-pagina/sobre-pagina.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainGamesPageComponent,
    DefensorDaHortaPaginaComponent,
    MenuLateralComponent,
    PoucoAPoucoComponent,
    NenhumAdeusParaNosComponent,
    KappasQuestPaginaComponent,
    ArtePaginaComponent,
    SobrePaginaComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
