import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-beside-image',
  templateUrl: './text-beside-image.component.html',
  styleUrls: ['./text-beside-image.component.scss']
})
export class TextBesideImageComponent implements OnInit {
  // @Input() image: string;
  // @Input() title: string;
  // @Input() description: any[];
  // @Input() tools: any[];
  @Input() projects: any[];

  constructor() { }

  ngOnInit() {
  }

}
