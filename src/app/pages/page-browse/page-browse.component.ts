import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-browse',
  templateUrl: './page-browse.component.html',
  styleUrls: ['./page-browse.component.css']
})
export class PageBrowseComponent implements OnInit {
  state = 'browse';
  currentUser;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }

}
