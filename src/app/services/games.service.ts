import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Game {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
  export class GameService {

    constructor(private http: HttpClient) {}

    getAllGames() {
      return this.http.get(`/api/games`);
    }
  }
