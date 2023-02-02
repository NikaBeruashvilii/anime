import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './views/animes/animes.component';
import { AllAnimeComponent } from './views/all-anime/all-anime.component';

const routes: Routes = [
  { path: "", component: AnimesComponent},
  // { path: "allAnime", component: AllAnimeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
