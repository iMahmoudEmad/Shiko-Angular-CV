import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = [
    {
      picture: 'https://d33wubrfki0l68.cloudfront.net/c57a287843285bf3b7e368b64c48af186b4c0610/edbfc/static/images/projects/chatter/preview/chatter-phone-right.png',
      name: 'Chatter for Charity1',
      tech: 'UI/UX + WEB',
      description: 'An iOS platform that enables users to meet new people, video chat with friends, and run into celebrities in a live, real-time environment.'
    },
    {
      picture: 'https://d33wubrfki0l68.cloudfront.net/c57a287843285bf3b7e368b64c48af186b4c0610/edbfc/static/images/projects/chatter/preview/chatter-phone-right.png',
      name: 'Chatter for Charity2',
      tech: 'UI/UX + WEB',
      description: 'An iOS platform that enables users to meet new people, video chat with friends, and run into celebrities in a live, real-time environment.'
    },
    {
      picture: 'https://d33wubrfki0l68.cloudfront.net/c57a287843285bf3b7e368b64c48af186b4c0610/edbfc/static/images/projects/chatter/preview/chatter-phone-right.png',
      name: 'Chatter for Charity3',
      tech: 'UI/UX + WEB',
      description: 'An iOS platform that enables users to meet new people, video chat with friends, and run into celebrities in a live, real-time environment.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
