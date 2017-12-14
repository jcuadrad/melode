import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdeService } from '../../services/ode/ode.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-ode-info',
  templateUrl: './page-ode-info.component.html',
  styleUrls: ['./page-ode-info.component.css']
})
export class PageOdeInfoComponent implements OnInit {
  state = 'ode';
  ode;
  currentUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private odeService: OdeService,
    private sanitizer: DomSanitizer,
    private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.activatedRoute.params.subscribe((param) => {
      this.odeService.getOde(param.id)
      .map((response) => {
        return response.json();
      })
      .subscribe((result) => {
        this.ode = result.ode;
      });
    });
  }

}
