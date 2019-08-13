import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Game {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
  export class GameService {
    url = 'https://thawing-fortress-79986.herokuapp.com';

    constructor(private http: HttpClient) {}

    getAllGames() {
      return this.http.get(`/api/games`);
    }
  }
