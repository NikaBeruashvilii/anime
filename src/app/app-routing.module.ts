import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './views/animes/animes.component';
import { AllAnimeComponent } from './views/all-anime/all-anime.component';
import { NarutoComponent } from './views/naruto/naruto.component';
import { OnePieceComponent } from './views/one-piece/one-piece.component';
import { BleachComponent } from './views/bleach/bleach.component';

const routes: Routes = [
  { path: "", component: AnimesComponent},
  { path: "naruto", component: NarutoComponent}  ,
  {path: "one-piece", component: OnePieceComponent},
  {path: "bleach", component: BleachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
