import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/shared_services/anime.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent implements OnInit {
  allAnimeList:any [] = [];
  apiUrl:any = "https://api.jikan.moe/v4/anime?q=naruto&sfw";

  constructor(private router:Router, 
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getNarutoData().subscribe((response:any) => {
      this.allAnimeList = response.data;
    })
  }

  getNarutoData():Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
