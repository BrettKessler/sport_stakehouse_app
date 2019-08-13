import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './main-body/main-body-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideMenuComponent } from './main-body/side-menu/side-menu.component';
import { SportsCardsComponent } from './main-body/sports-cards/sports-cards.component';
import { TopSocialMediaComponent } from './top-social-media/top-social-media.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MapComponent } from './main-body/data-components/map-component/map-component.component';
import { MainBodyComponent } from './main-body/main-body/main-body.component';
import { GameListComponent } from './main-body/game-list/game-list.component';
import { FaqComponent } from './main-body/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideMenuComponent,
    SportsCardsComponent,
    TopSocialMediaComponent,
    SearchbarComponent,
    MapComponent,
    MainBodyComponent,
    GameListComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
