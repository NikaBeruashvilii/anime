import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-piece',
  templateUrl: './one-piece.component.html',
  styleUrls: ['./one-piece.component.css']
})
export class OnePieceComponent implements OnInit {

  onePieceList:any [] = [];
  apiUrl:any = "https://api.jikan.moe/v4/anime?q=one piece&sfw";

  constructor(private router:Router, 
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getNarutoData().subscribe((response:any) => {
      this.onePieceList = response.data;
    })
  }

  getNarutoData():Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
