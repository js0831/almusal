import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  state = 'initial-state';

  constructor() { }

  ngOnInit() {
    setTimeout( x => {
      this.state = '';
    }, 500 );
  }

}
