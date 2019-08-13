import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Game {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
  export class GameService {
    private url = '/api/games';

    constructor(private http: HttpClient) {}

    getAllGames() {
      return this.http.get(this.url);
    }
  }
