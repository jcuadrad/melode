import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-page-share-ode',
  templateUrl: './page-share-ode.component.html',
  styleUrls: ['./page-share-ode.component.css']
})
export class PageShareOdeComponent implements OnInit {
  error = null;
  processing = null;

  constructor(
    private odeService: OdeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleSubmit(newOde) {
    this.error = null;
    this.processing = true;
    this.odeService.createOde(newOde.value)
      .subscribe(
        () => {
          this.processing = false;
          this.router.navigate(['/browse']);
        },
        (err) => {
          this.processing = false;
          this.error = 'An unexpected error occurred, please try again'
          // @todo style the error
        }
      );
  }

}
