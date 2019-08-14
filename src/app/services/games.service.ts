import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Game {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
  export class GameService {
    private url = '/api/games';

    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

    getAllGames() {
      return this.http.get(this.url);
    }
  }
