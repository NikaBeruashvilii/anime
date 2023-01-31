import { Injectable } from '@angular/core';
import { Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  constructor() { }

  animeService:Subject<any> = new Subject()
}
