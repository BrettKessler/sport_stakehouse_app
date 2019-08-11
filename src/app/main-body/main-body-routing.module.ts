import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsCardsComponent } from './sports-cards/sports-cards.component';
import { MapComponent } from './data-components/map-component/map-component.component';
import { GameListComponent } from './game-list/game-list.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: SportsCardsComponent },
  { path: 'home', component: SportsCardsComponent},
  { path: 'map', component: MapComponent },
  { path: 'game-list', component: GameListComponent },
  { path: 'faq', component: FaqComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
