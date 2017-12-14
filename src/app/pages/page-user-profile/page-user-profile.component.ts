import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-page-user-profile',
  templateUrl: './page-user-profile.component.html',
  styleUrls: ['./page-user-profile.component.css']
})
export class PageUserProfileComponent implements OnInit {
  state = 'profile';
  currentUser;
  odesLiked;
  myOdes;

  constructor(private authService: AuthService, private odeService: OdeService) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    console.log(this.currentUser);
    this.odeService.getUserPopulated(this.currentUser._id)
    .subscribe(
      (user) => {
          this.odesLiked = user.user.odesLiked;
      });
      this.odeService.getMyOdes(this.currentUser._id)
      .subscribe(
        (odes) => {
          this.myOdes = odes.myOdes;
      }
      );
      }
}
