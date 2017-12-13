import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatStepperModule } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { OutletContext } from '@angular/router/src/router_outlet_context';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-ode-form',
  templateUrl: './ode-form.component.html',
  styleUrls: ['./ode-form.component.css']
})
export class OdeFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter;

  snippetForm = new FormGroup({
    snippet: new FormControl(''),
    artist: new FormControl(''),
    songName: new FormControl(''),
  });
  results;
  artist: String;
  public keyUp = new Subject<any>();

  constructor(private odeService: OdeService) {
    const subscription = this.keyUp
    .map(event => event.target.value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap(search => Observable.of(search).delay(500))
    .subscribe( (res) => {
      const artist = {
        artist: res
      };
      this.odeService.autocomplete(artist)
      .subscribe( (spotRes) => {
        this.results = spotRes;
      });
    }
  );
  }

  ngOnInit() {
    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13 || event.keyCode === 9) {
        this.results = null;
      }
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.snippetForm);
  }

  handleSelect(result) {
    this.snippetForm.patchValue({
      artist: result.artist,
      songName: result.name
      }
    );
    this.results = null;
    console.log(result);
  }

  clearResults(event) {}

}
