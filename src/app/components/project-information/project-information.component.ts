import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {
  @Input() information;
  @Input() titleColor;
  constructor() { }

  ngOnInit() {
  }

}
