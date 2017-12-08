import { Component, OnInit, Input } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-ode-full-lyrics',
  templateUrl: './ode-full-lyrics.component.html',
  styleUrls: ['./ode-full-lyrics.component.css']
})
export class OdeFullLyricsComponent implements OnInit {

  @Input() sampleOde;

  constructor() { }

  ngOnInit() {
  }

}
