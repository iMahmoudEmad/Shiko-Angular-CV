import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss']
})
export class AboutHeaderComponent implements OnInit {
  description = [
    "Hey there! My name is Eugene Ross. I\'m an interactive designer and developer based in Seattle.",
    "I thoroughly love what I do for a living. My drive to pursue my passion is the reason why I get up every morning. I enjoy working with clients and teams of various sizes within different industries. Each day I\'m humbled that I\'m able to help businesses and individuals reach beyond their goals while building close relationships with them.",
    "I\'ve proudly had the opportunity to work closely with startups, helping them solve their problems from a design, product, and technology perspective. Additionally, I find that each problem a company has is unique in its own way. Not only does that excite me, but it allows me to expand my horizons for how I\'m able to come to new solutions.",
    "Aside from working with clients, I enjoy occasionally hacking on side projects and eventually building them up into their own product.",
    "Presently, I lead a remote-based team at a digital studio called Numie where we focus on creating web experiences for startups. I collaborate on exciting projects with teams scattered across the globe among different backgrounds, beliefs, and timezones. My curious nature leads me to discover new tools, products, and methods that are shared within my industry."
  ];

  constructor() { }

  ngOnInit() {
  }

}
