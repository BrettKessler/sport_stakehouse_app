import { Component, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { _ } from 'underscore';
import { Chart } from 'chart.js';
import { GameService } from '../../services/games.service';

@Component({
  selector: 'app-sports-cards',
  templateUrl: './sports-cards.component.html',
  styleUrls: ['./sports-cards.component.scss']
})

export class SportsCardsComponent implements OnInit, AfterViewInit {

  chart: [];
  gamesArray;

  constructor(
    private games: GameService,
  ) { }

  ngOnInit() {
    this.games.getAllGames().subscribe(game => {
      console.log(game);
      this.gamesArray = game;
    });
  }

  ngAfterViewInit() {
    this.loadCharts();
  }

  loadCharts() {
    _.each(this.gamesArray.games, (game, i) => {
      this.chart = new Chart(game.id, {
        type: 'doughnut',
      data: {
        labels: [game.homeTeam.teamName, game.awayTeam.teamName],
        datasets: [
          {
            label: game.homeTeam.teamName + ' Vs ' + game.awayTeam.teamName,
            backgroundColor: [game.homeTeam.schoolPrimaryColor, game.awayTeam.schoolSecondaryColor],
            data: [game.homeTeam.totalBets, game.awayTeam.totalBets]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: game.homeTeam.teamName + ' Vs ' + game.awayTeam.teamName
        }
      }
      });
    });
  }
}
