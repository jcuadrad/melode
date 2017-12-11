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
  user_id;
  currentUser;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.currentUser = this.authService.getMeBack();
    //   if (!this.currentUser) {
    //     this.activatedRoute.queryParams.subscribe((params) => {
    //       this.user_id = params.id;
    //     });
    //     this.authService.getMe(this.user_id)
    //     .map((response) => {
    //       return response.json();
    //     })
    //     .subscribe((result) => {
    //       this.currentUser = result.user;
    //       this.authService.setUser(this.currentUser);
    //       console.log(this.currentUser);
    //     });
    // }
  }

}
