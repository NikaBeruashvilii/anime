import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  apiUrl: string = "https://api.jikan.moe/v4/anime?q=";

  constructor(private httpClient:HttpClient) { }

  getAnimeData():Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getAnimeByName(animeName: string):Observable<any> {
    return this.httpClient.get(`${this.apiUrl}${animeName}&sfw`)
  }


}
