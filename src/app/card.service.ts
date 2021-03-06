import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};


@Injectable({
  providedIn: 'root'
})


export class CardService {

  public apiUrl = "http://51.210.180.207:3000";
  public apiUrlLocalhost = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { 
  }

  getCards(): Observable<any> {
    return this.http.get(this.apiUrl + "/cards");
  }

  getCardsByUser(playerId): Observable<any> {
    let fullUrl = this.apiUrl + "/" + playerId;
    console.log(fullUrl);
    
    return this.http.get(fullUrl);
  }

  getCardsByUserByCollection(playerId, collectionId): Observable<any> {
    let fullUrl = this.apiUrl + "/" + playerId + "/" + collectionId;
    console.log(fullUrl);

    return this.http.get(fullUrl);
  }
}
