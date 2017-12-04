import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  newUser: User;

  constructor( private authServices: AuthService) { }

  ngOnInit() {
  }

}
