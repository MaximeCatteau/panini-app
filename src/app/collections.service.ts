import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  public apiUrl = "http://51.210.180.207:3000/collections";

  constructor(private http: HttpClient) { 
  }

  getCollections(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCollectionSize(collectionId): Observable<any> {
    return this.http.get(this.apiUrl + "/" + collectionId + "/size");
  }

  getFirstIndexOfCollection(collectionId): Observable<any> {
    return this.http.get(this.apiUrl + "/" + collectionId + "/first");
  }
  
  getLastIndexOfCollection(collectionId): Observable<any> {
    return this.http.get(this.apiUrl + "/" + collectionId + "/last");
  }
}
