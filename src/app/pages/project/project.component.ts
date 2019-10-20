import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Problem',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio possimus, ad sunt veritatis, ipsa architecto ea placeat non maiores, suscipit ut animi. Expedita assumenda perspiciatis molestias fugiat. Porro, quis!',
      tools: ['Sketch', 'InVision'],
      isImgRight: true
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Problem',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio possimus, ad sunt veritatis, ipsa architecto ea placeat non maiores, suscipit ut animi. Expedita assumenda perspiciatis molestias fugiat. Porro, quis!',
      tools: ['Sketch', 'InVision'],
      isImgRight: false
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Problem',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio possimus, ad sunt veritatis, ipsa architecto ea placeat non maiores, suscipit ut animi. Expedita assumenda perspiciatis molestias fugiat. Porro, quis!',
      tools: ['Sketch', 'InVision'],
      isImgRight: true
    }
];
  constructor() {}

  ngOnInit() {}

}
