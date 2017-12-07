import { Component, ViewEncapsulation, ViewChild, TemplateRef, EventEmitter, NgModule, OnInit } from '@angular/core';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { OdeService } from '../../services/ode/ode.service';

const BUFFER = 2;

@Component({
  selector: 'app-ode-box',
  templateUrl: './ode-box.component.html',
  styleUrls: ['./ode-box.component.css']
})
export class OdeBoxComponent implements OnInit {

  loading = true;
  odes: any[] = [];
  cards: any[] = [];
  cardCursor = 0;
  orientation = 'x';
  overlay: any = {
    like: {
      backgroundColor: 'transparent'
  },
    dislike: {
      backgroundColor: '#e92828'
  }
  };

  constructor(private odeService: OdeService) {}

  ngOnInit() {
    this.getMore();
  }

  private getMore() {
    if (this.cardCursor < this.odes.length - BUFFER) {
      return;
    }
    this.odeService.getRandom(this.odes.map(ode => ode._id))
    .subscribe(
      (result) => {
        this.loading = false;
        const newResult = result.map(ode => Object.defineProperty(ode, 'likeEvent', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: new EventEmitter()
        }));
        this.odes = this.odes.concat(newResult);
        console.log(newResult);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCardLike(event) {
    const item = this.odes[this.cardCursor++];
    // DO STUFF WITH YOUR CARD
  }

  like(like) {
    if (this.odes.length > 0) {
    this.odes[this.cardCursor++].likeEvent.emit({ like });
    this.getMore();
    // DO STUFF WITH YOUR CARD
    }
  }

  getKittenUrl() {
    console.log('Why the fuck am I being called');
  }

  onRelease(event) {
    // this.cardLogs.push('onRelease(event)');
    // this.scrollToBottom(this.cardLogContainer);
    this.getMore();
    console.log('onRelease()');
    console.log(this.cards);
    console.log(this.cardCursor);
  }

  onAbort(event) {
    // this.cardLogs.push('onAbort(event)');
    console.log('onAbort()');
    // this.scrollToBottom(this.cardLogContainer);
  }

  onSwipe(event) {
  }

}
