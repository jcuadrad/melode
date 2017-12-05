import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatStepperModule } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { OutletContext } from '@angular/router/src/router_outlet_context';

@Component({
  selector: 'app-ode-form',
  templateUrl: './ode-form.component.html',
  styleUrls: ['./ode-form.component.css']
})
export class OdeFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter

  snippetForm = new FormGroup({
    snippet: new FormControl(''),
    artist: new FormControl(''),
    songName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    this.onSubmit.emit(this.snippetForm);
  }

}
