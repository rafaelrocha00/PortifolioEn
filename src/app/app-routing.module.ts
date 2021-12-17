import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DefensorDaHortaPaginaComponent } from './defensor-da-horta-pagina/defensor-da-horta-pagina.component';
import { MainGamesPageComponent } from './main-games-page/main-games-page.component';
import { MainPageComponent } from './main-page/main-page.component';

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
    path: '',
    component: MainPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
