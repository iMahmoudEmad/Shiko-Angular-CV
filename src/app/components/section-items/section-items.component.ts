import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-items',
  templateUrl: './section-items.component.html',
  styleUrls: ['./section-items.component.scss']
})
export class SectionItemsComponent implements OnInit {
  @Input() sections;
  constructor() { }

  ngOnInit() {
  }

  isString(value) {
    return typeof value === 'string';
  }
}
