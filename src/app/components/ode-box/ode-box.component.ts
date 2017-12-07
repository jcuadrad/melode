import { Component, ViewEncapsulation, ViewChild, TemplateRef, EventEmitter, NgModule, OnInit } from '@angular/core';
import { SwipeCardsModule } from 'ng2-swipe-cards';


@Component({
  selector: 'app-ode-box',
  templateUrl: './ode-box.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ode-box.component.css']
})
export class OdeBoxComponent implements OnInit {

  @ViewChild('cardLog') cardLogContainer: any;
  @ViewChild('tinderCardLog') tinderCardLogContainer: any;


  cards: any[] = [];
  cardCursor: number = 0;
  orientation: string = "x";
  overlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };

  cardLogs: any = [];
  tinderCardLogs: any = [];

  constructor() {}

   like(like) {
    const self = this;
    if (this.cards.length > 0) {
        self.cards[this.cardCursor++].likeEvent.emit({ like });
        // DO STUFF WITH YOUR CARD
        this.tinderCardLogs.push('callLike(' + JSON.stringify({ like }) + ')');
        // this.scrollToBottom(this.tinderCardLogContainer);
    }
}

onCardLike(event) {
    const item = this.cards[this.cardCursor++];
    // DO STUFF WITH YOUR CARD
    this.tinderCardLogs.push('onLike(' + JSON.stringify(event) + ')');
    // this.scrollToBottom(this.tinderCardLogContainer);
}

getKittenUrl() {
    const w = 500 - Math.floor((Math.random() * 100) + 1);
    const h = 500 - Math.floor((Math.random() * 100) + 1);
    return 'http://placekitten.com/' + w + '/' + h;
}

onRelease(event) {
    this.cardLogs.push('onRelease(event)');
    // this.scrollToBottom(this.cardLogContainer);
    console.log(this.cards);
    console.log(this.cardCursor);
}

onAbort(event) {
    this.cardLogs.push('onAbort(event)');
    // this.scrollToBottom(this.cardLogContainer);
}

onSwipe(event) {
    this.cardLogs.push('onSwipe(event)');
    // this.scrollToBottom(this.cardLogContainer);
}

// scrollToBottom(el) {
//     setTimeout(() => {
//         el.nativeElement.scrollTop = el.nativeElement.scrollHeight;
//     }, 100);
// }

    ngOnInit() {
        for (let i = 0; i < 50; i++) {
        this.cards.push({
            id: i + 1,
            likeEvent: new EventEmitter(),
            destroyEvent: new EventEmitter(),
            url: this.getKittenUrl()
        });
    }
  }
}
