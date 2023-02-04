import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './shared_components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimesComponent } from './views/animes/animes.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import { NarutoComponent } from './views/naruto/naruto.component';
import { OnePieceComponent } from './views/one-piece/one-piece.component';
import { BleachComponent } from './views/bleach/bleach.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AnimesComponent,
    NavigationComponent,
    NarutoComponent,
    OnePieceComponent,
    BleachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
