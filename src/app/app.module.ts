// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { OdeService } from './services/ode/ode.service';


import { AppComponent } from './app.component';

// Pages
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageShareOdeComponent } from './pages/page-share-ode/page-share-ode.component';
import { PageBrowseComponent } from './pages/page-browse/page-browse.component';
import { PageOdeInfoComponent } from './pages/page-ode-info/page-ode-info.component';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';

// Components
import { OdeFormComponent } from './components/ode-form/ode-form.component';
import { OdeBoxComponent } from './components/ode-box/ode-box.component';
import { OdeListComponent } from './components/ode-list/ode-list.component';
import { OdeSpotifyInfoComponent } from './components/ode-spotify-info/ode-spotify-info.component';
import { OdeFullLyricsComponent } from './components/ode-full-lyrics/ode-full-lyrics.component';
import { OdeGeniusFactComponent } from './components/ode-genius-fact/ode-genius-fact.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent },
  { path: 'share', component: PageShareOdeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageShareOdeComponent,
    PageBrowseComponent,
    PageOdeInfoComponent,
    PageUserProfileComponent,
    OdeFormComponent,
    OdeBoxComponent,
    OdeListComponent,
    OdeSpotifyInfoComponent,
    OdeFullLyricsComponent,
    OdeGeniusFactComponent,
    UserInfoComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AuthService, UserService, OdeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
