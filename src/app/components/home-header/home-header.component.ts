import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})

export class HomeHeaderComponent implements OnInit {
  headerData = [];
  data = 'I\'m Shink — an interactive designer & developer exploring new and exciting opportunities.';
  constructor() {
    this.headerData = this.data.split(' ');
  }

  ngOnInit() {
  }

}
