import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bleach',
  templateUrl: './bleach.component.html',
  styleUrls: ['./bleach.component.css']
})
export class BleachComponent implements OnInit {
  bleachList:any [] = []
  bleachApiUrl:any = "https://api.jikan.moe/v4/anime?q=bleach&sfw"

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getBleachData().subscribe((response:any) => {
      this.bleachList = response.data;
    }) 
  }

  getBleachData():Observable<any> {
   return this.httpClient.get(this.bleachApiUrl);
  }

}
