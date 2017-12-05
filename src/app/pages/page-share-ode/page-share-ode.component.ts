import { Component, OnInit } from '@angular/core';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-page-share-ode',
  templateUrl: './page-share-ode.component.html',
  styleUrls: ['./page-share-ode.component.css']
})
export class PageShareOdeComponent implements OnInit {

  constructor(private odeService: OdeService) { }

  ngOnInit() {
  }

  handleSubmit(newOde) {
    this.odeService.createOde(newOde.value);
  }

}
