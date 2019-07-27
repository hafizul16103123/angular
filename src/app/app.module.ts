import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarvelHeroComponent } from './marvel-hero/marvel-hero.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';

const RouterLists: Routes = [
  { path: "", component: DcComicsComponent },
  { path: "heros", component: MarvelHeroComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(RouterLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
