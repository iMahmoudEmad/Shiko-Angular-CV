import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  person = {
    name: 'shiko shaker',
    picture: 'https://d33wubrfki0l68.cloudfront.net/101237bbdd5678159c8cb3b53a63823c3af4bf7a/bab4e/static/images/me.png',
    paragraphs: [
      'This question is always a tough one to answer because I feel like people change a lot throughout the years. Things like views, likes, dislikes, hobbies, and many other things change, and that\'s a good thing. For me, I enjoy going outside of my comfort zone to discover and explore what the world has to offer to gain new perspectives',
      'I live a well balanced work-life, with frequent traveling mixed in with new adventures in new places. From these journeys, I cherish meeting new people and forming connections. I\'m a huge basketball fan with a love of how the game is played. I could eat sushi every day for the rest of my life if it was a practical decision. I enjoy listening to a vast range of music but usually stick to my frequently updated Deep House playlist while working. This, of course, isn\'t an exact blueprint of me, so if you want to know more, say hello!'
    ]
  };

  sections = [
    {
      baseTitle: 'capabilities',
      sectionItems: [
        {
          title: 'Strategy',
          lists: [
            'Digital Strategy',
            'Product / team management',
            'prototyping',
            'launch strategy'
          ]
        },
        {
          title: 'design',
          lists: [
            'responsive web design',
            'design systems',
            'ui / ux design',
            'product design'
          ]
        },
        {
          title: 'development',
          lists: [
            'front-end development',
            'react / react native',
            'node.js',
            'git + dev workflow'
          ]
        }
      ]
    },
    {
      baseTitle: 'how i work',
      sectionItems: [
        {
          title: 'For impact',
          lists: 'I strive for making products that create a positive impact for both the client and the user. I have a broad repertoire of skills in the digital realm and can fill in any gap someone may have. I examine what goals they need and make sure they\'re achieved in the most meaningful way.'
        },
        {
          title: 'From anywhere',
          lists: 'I\'m based in Seattle - but enjoy working with clients from all over the world. Luckily I have the flexibility to work in a remote environment from whichever city I\'m currently in. However, I\'m able to travel to work with teams and individuals on location to get a project started or partake in consulting.'
        },
        {
          title: 'development',
          lists: 'Who I work with has no bounds. I work with clients of all sizes and types. I\'ll always be happy to aid in any way I can. I\'m able to provide a clear plan that outlines the best way to approach your problems and goals. For all my projects, I work closely with teams in a collaborative effort.'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
