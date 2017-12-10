import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ode-genius-fact',
  templateUrl: './ode-genius-fact.component.html',
  styleUrls: ['./ode-genius-fact.component.css']
})
export class OdeGeniusFactComponent implements OnInit {

  @Input() ode;

  constructor() { }

  ngOnInit() {
  }

}
