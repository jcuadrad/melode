import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ode-spotify-info',
  templateUrl: './ode-spotify-info.component.html',
  styleUrls: ['./ode-spotify-info.component.css']
})
export class OdeSpotifyInfoComponent implements OnInit {

  @Input() sampleOde;

  constructor() { }

  ngOnInit() {
  }

}
