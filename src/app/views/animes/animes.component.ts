import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/shared_services/anime.service';
import { HttpClient } from '@angular/common/http';
import { AnimeServiceService } from '../../header/navigation/anime-service.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  animeList:any [] = [];
  animeName!:any;

  constructor(private animeService:AnimeService,
    private activatedRoute:ActivatedRoute,
    private http:HttpClient,
    private subjectService:AnimeServiceService
    ) { }

  ngOnInit(): void {
    this.subjectService.animeService.subscribe(data=>{
     this.animeName = data;
     this.animeService.getAnimeByName(this.animeName).subscribe((response:any) => {
      this.animeList = response.data;
        console.log(this.animeList);
     })
    }) 
  }
}