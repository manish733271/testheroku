import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { routing } from './app.routing';
import { AssetsComponent } from './assets/assets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleassetComponent } from './singleasset/singleasset.component';
import { WatchComponent } from './watch/watch.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AssetsComponent,
    NavbarComponent,
    SingleassetComponent,
    WatchComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
