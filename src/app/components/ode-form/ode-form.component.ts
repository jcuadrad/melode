import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ode-form',
  templateUrl: './ode-form.component.html',
  styleUrls: ['./ode-form.component.css']
})
export class OdeFormComponent implements OnInit {

  formGroup1 = new FormGroup({});
  formGroup2 = new FormGroup({});
  snippet: string;

  constructor() { }

  ngOnInit() {
  }

}
