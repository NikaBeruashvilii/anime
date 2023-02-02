import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AnimeService } from 'src/app/shared_services/anime.service';

@Component({
  selector: 'app-all-anime',
  templateUrl: './all-anime.component.html',
  styleUrls: ['./all-anime.component.css']
})
export class AllAnimeComponent implements OnInit {
  // allAnimeList:any [] = [];

  constructor(private animeService:AnimeService,
    private router:Router) { }

  ngOnInit(): void {
    // this.animeService.getAnimeData().subscribe((response:any) => {
    //   this.allAnimeList = response.data;
    //   console.log(this.allAnimeList);
    // })
  }
}
