import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageShareOdeComponent } from './pages/page-share-ode/page-share-ode.component';
import { OdeFormComponent } from './components/ode-form/ode-form.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { OdeBoxComponent } from './components/ode-box/ode-box.component';
import { PageOdeInfoComponent } from './pages/page-ode-info/page-ode-info.component';
import { SpotifyInfoComponent } from './components/spotify-info/spotify-info.component';
import { FullLyricsComponent } from './components/full-lyrics/full-lyrics.component';
import { GeniusFactComponent } from './components/genius-fact/genius-fact.component';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { OdeListComponent } from './components/ode-list/ode-list.component';
import { PageBrowseComponent } from './pages/page-browse/page-browse.component';
import { OdeSpotifyInfoComponent } from './components/ode-spotify-info/ode-spotify-info.component';
import { OdeFullLyricsComponent } from './components/ode-full-lyrics/ode-full-lyrics.component';
import { OdeGeniusFactComponent } from './components/ode-genius-fact/ode-genius-fact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageShareOdeComponent,
    OdeFormComponent,
    BrowseComponent,
    OdeBoxComponent,
    PageOdeInfoComponent,
    SpotifyInfoComponent,
    FullLyricsComponent,
    GeniusFactComponent,
    PageUserProfileComponent,
    UserInfoComponent,
    OdeListComponent,
    PageBrowseComponent,
    OdeSpotifyInfoComponent,
    OdeFullLyricsComponent,
    OdeGeniusFactComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
