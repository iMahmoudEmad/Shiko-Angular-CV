import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-beside-image',
  templateUrl: './text-beside-image.component.html',
  styleUrls: ['./text-beside-image.component.scss']
})
export class TextBesideImageComponent implements OnInit {
  @Input() image = 'https://ross.so/static/images/projects/kic/final/final1.png';
  @Input() title = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores';
  @Input() description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio possimus, ad sunt veritatis, ipsa architecto ea placeat non maiores, suscipit ut animi. Expedita assumenda perspiciatis molestias fugiat. Porro, quis!';
  @Input() tools = ["Sketch", "InVision"];

  constructor() { }

  ngOnInit() {
  }

}
