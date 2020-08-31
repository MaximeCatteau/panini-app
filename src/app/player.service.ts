import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public apiUrl = "http://51.210.180.207:3000/players";

  constructor(private http: HttpClient) { 
  }

  getPlayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
