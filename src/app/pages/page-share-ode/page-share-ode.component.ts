import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OdeService } from '../../services/ode/ode.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-share-ode',
  templateUrl: './page-share-ode.component.html',
  styleUrls: ['./page-share-ode.component.css']
})
export class PageShareOdeComponent implements OnInit {
  error = null;
  processing = null;
  user_id;
  currentUser;
  fullOde;
  private sub;

  constructor(
    private odeService: OdeService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.user_id = params.id;
    });
    this.authService.getMe(this.user_id)
    .map((response) => {
      return response.json();
    })
    .subscribe((result) => {
      this.currentUser = result.user;
      this.authService.setUser(this.currentUser);
      console.log(this.currentUser);
    });
  }

  handleSubmit(newOde) {
    this.error = null;
    this.processing = true;
    this.fullOde = {
      snippet: newOde.value,
      ownerId: this.currentUser._id
    };
    this.odeService.createOde(this.fullOde)
      .subscribe(
        () => {
          this.processing = false;
          this.router.navigate(['/browse'], { queryParams: { id: this.currentUser._id } });
        },
        (err) => {
          this.processing = false;
          this.error = 'An unexpected error occurred, please try again';
          // @todo style the error
        }
      );
  }

}
