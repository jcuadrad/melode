import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  newUser: User;

  constructor(private authServices: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin () {
    this.authServices.login()
      .subscribe(
        (result) => {
          const results = result.url;
          console.log(typeof results);
          window.location.href = results;
        }
      );
  }

}
