import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/shared_services/anime.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() animeItem:any;

  constructor(private router:Router, private animeService:AnimeService) { }

  ngOnInit(): void {
  }

}
