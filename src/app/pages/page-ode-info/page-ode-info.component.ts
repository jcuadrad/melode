import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdeService } from '../../services/ode/ode.service';

@Component({
  selector: 'app-page-ode-info',
  templateUrl: './page-ode-info.component.html',
  styleUrls: ['./page-ode-info.component.css']
})
export class PageOdeInfoComponent implements OnInit {

  sampleOde = {
    updated_at: '2017-12-07 23:42:44.013',
    created_at: '2017-12-07 23:42:44.013',
    snippet: 'Your confusion, my illusion, worn like a mask of self hate',
    songName: 'Atmosphere',
    artist: 'Joy Division',
    isEmpty: false,
    genius: {
      annotation: [
        'The song that ',
        'John Peel',
        ' played after announcing ',
        'Ian Curtis',
        '’s death is unbearably close and brooding, but allows the occasional shaft of light. ',
        'Stephen Morris',
        '’s pattering drums rouse ',
        'Atmosphere',
        ' from troubled slumber, while ',
        'Bernard Sumner',
        '’s glittering, chiming keyboards give it a bright beauty. It’s a shimmer that remains even as Curtis grips the microphone with increasing intensity.'
      ]
    },
    musixmatch: {
      fullLink: 'https://www.musixmatch.com/lyrics/Joy-Division/Atmosphere?utm_source=application&utm_campaign=api&utm_medium=Ironhack%3A1409616491815',
      lyrics: [
        'Walk in silence ',
        'Dont walk away, in silence.',
        'See the danger ',
        'Always danger ',
        'Endless talking ',
        'Life rebuilding ',
        'Dont walk away. ',
        'Walk in silence ',
        '...',
        '',
        '******* This Lyrics is NOT for Commercial use *******',
        '(1409616491815)'
      ]
    },
    spotify: {
      name: 'Atmosphere - 2010 Remastered Version',
      image: 'https://i.scdn.co/image/72dd3060dfa3aa9ac10b57fb7a7cff5ec19b515d',
      preview: 'https://p.scdn.co/mp3-preview/12a9f32ff1535d2a5eb8ced9c74c7790ed5096ce?cid=6bbca00628304a9ab4c67be40eda0dd0',
      artist: 'Joy Division',
      uri: 'spotify:track:5UPnBgnylUCjtAPtAH4tJY'
    }
  };

  ode;

  constructor(private activatedRoute: ActivatedRoute, private odeService: OdeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.odeService.getOde(param.id)
      .map((response) => {
        return response.json();
      })
      .subscribe((result) => {
        this.ode = result.ode;
        console.log(this.ode);
      });
    });
  }

}
