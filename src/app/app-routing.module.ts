import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtePaginaComponent } from './arte-pagina/arte-pagina.component';
import { DefensorDaHortaPaginaComponent } from './defensor-da-horta-pagina/defensor-da-horta-pagina.component';
import { DocsComponent } from './docs/docs.component';
import { KappasQuestPaginaComponent } from './kappas-quest-pagina/kappas-quest-pagina.component';
import { MainGamesPageComponent } from './main-games-page/main-games-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NenhumAdeusParaNosComponent } from './nenhum-adeus-para-nos/nenhum-adeus-para-nos.component';
import { PoucoAPoucoComponent } from './pouco-a-pouco/pouco-a-pouco.component';
import { SobrePaginaComponent } from './sobre-pagina/sobre-pagina.component';

const routes: Routes = [
  {
    path: 'games',
    component: MainGamesPageComponent
  },
  {
    path: 'defensorDaHorta',
    component: DefensorDaHortaPaginaComponent
  },
  {
    path: 'poucoAPouco',
    component: PoucoAPoucoComponent
  },
  {
    path: 'nenhumAdeusParaNos',
    component: NenhumAdeusParaNosComponent
  },
  {
    path: 'kappasQuest',
    component: KappasQuestPaginaComponent
  },
  {
    path: 'arte',
    component: ArtePaginaComponent
  },
  {
    path: 'sobre',
    component: SobrePaginaComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: '',
    component: MainPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
