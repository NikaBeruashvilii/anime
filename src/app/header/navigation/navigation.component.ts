import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/shared_services/anime.service';
import { AnimeServiceService } from './anime-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  animeName!:any;
  animeData!:any;
  constructor(private httpService:AnimeService,private animeService:AnimeServiceService) { }

  ngOnInit(): void {

    
  }
  onBtnSubmit(){
    this.animeService.animeService.next(this.animeName);
  }
}
