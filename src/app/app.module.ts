// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Swipe Cards
import { SwipeCardsModule } from 'ng2-swipe-cards';

// Angular Material Components
import { MatStepperModule } from '@angular/material';

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
import { OverlayProcessingComponent } from './components/overlay-processing/overlay-processing.component';

// Guards
import { RequireAuthGuard } from './guards/require-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [RequireAnonGuard], component: PageLoginComponent },
  { path: 'share', canActivate: [RequireAuthGuard], component: PageShareOdeComponent },
  { path: 'browse', canActivate: [RequireAuthGuard], component: PageBrowseComponent },
  { path: 'ode/:id', canActivate: [RequireAuthGuard], component: PageOdeInfoComponent }
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
    OverlayProcessingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwipeCardsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AuthService,
    UserService,
    OdeService,
    RequireAuthGuard,
    RequireAnonGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
