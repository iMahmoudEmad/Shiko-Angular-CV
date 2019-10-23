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

  information = {
    title: 'KINDNESS IS COOL',
    description: 'A message that promotes kindness through social well-being is difficult to communicate to people, especially younger ones. A solution is to provide an incentive based platform that rewards those for their acts of kindness.',
    lists:[
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      }
    ],
    link: 'http://www.google.com.eg'
  }
  constructor() {}

  ngOnInit() {}

}
