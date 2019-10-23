import {
  Component
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  fader
} from './router-animations';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    // slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  pages = [{
      name: 'about',
      url: 'about'
    },
    {
      name: 'contact',
      url: 'contact'
    }
  ];

  socialLinks = [{
      icon: 'facebook',
      url: ''
    },
    {
      icon: 'twitter',
      url: ''
    },
    {
      icon: 'behance',
      url: ''
    }
  ];

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  ngOnInit() {
    AOS.init({
      duration: 1200,
      delay: 200,
      // once: true
    });
  }
}
