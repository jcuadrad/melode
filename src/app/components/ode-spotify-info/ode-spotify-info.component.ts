import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ode-spotify-info',
  templateUrl: './ode-spotify-info.component.html',
  styleUrls: ['./ode-spotify-info.component.css']
})
export class OdeSpotifyInfoComponent implements OnInit {

  @Input() ode;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public getSanitizeURI(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
