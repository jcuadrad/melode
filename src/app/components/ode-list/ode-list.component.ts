import { Component, OnInit, Input } from '@angular/core';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-ode-list',
  templateUrl: './ode-list.component.html',
  styleUrls: ['./ode-list.component.css']
})
export class OdeListComponent implements OnInit {

  @Input() odesLiked;
  @Input() myOdes;

  constructor(private odeService: OdeService) { }

  ngOnInit() {
  }

}
