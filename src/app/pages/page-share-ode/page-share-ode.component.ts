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
  state = 'share';
  error = null;
  processing = null;
  currentUser;
  fullOde;

  constructor(
    private odeService: OdeService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
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
          this.router.navigate(['/browse']);
        },
        (err) => {
          this.processing = false;
          this.error = 'An unexpected error occurred, please try again';
          // @todo style the error
        }
      );
  }
}
