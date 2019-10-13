import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-under-image',
  templateUrl: './text-under-image.component.html',
  styleUrls: ['./text-under-image.component.scss']
})
export class TextUnderImageComponent implements OnInit {
  @Input() image = 'https://ross.so/static/images/projects/kic/final/final1.png';
  @Input() title = 'https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg';
  @Input() description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio possimus, ad sunt veritatis, ipsa architecto ea placeat non maiores, suscipit ut animi. Expedita assumenda perspiciatis molestias fugiat. Porro, quis!';

  constructor() { }
  ngOnInit() {
  }

}
