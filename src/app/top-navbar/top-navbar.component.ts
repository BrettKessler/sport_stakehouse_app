import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/games.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  constructor(
    private games: GameService
  ) { }

  ngOnInit() {
  }

  getGames() {
   this.games.getAllGames().subscribe(test => {
     console.log(test);
   });
  }
}
