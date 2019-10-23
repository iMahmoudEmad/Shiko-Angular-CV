import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { TextBesideImageComponent } from '../../components/shared/text-beside-image/text-beside-image.component';
import { TextUnderImageComponent } from 'src/app/components/shared/text-under-image/text-under-image.component';
import { ProjectHeaderComponent } from 'src/app/components/project-header/project-header.component';
import { ProjectInformationComponent } from 'src/app/components/project-information/project-information.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
];

@NgModule({
  declarations: [
    ProjectComponent,
    TextBesideImageComponent,
    TextUnderImageComponent,
    ProjectHeaderComponent,
    ProjectInformationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class ProjectModule { }
