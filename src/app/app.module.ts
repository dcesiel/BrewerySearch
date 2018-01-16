import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BrewerySearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
