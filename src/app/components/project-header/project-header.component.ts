import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() image;
  @Input() titleColor;
  constructor() {}

  ngOnInit() {}

}
