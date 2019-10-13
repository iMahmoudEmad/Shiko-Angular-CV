import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { TextBesideImageComponent } from '../../components/shared/text-beside-image/text-beside-image.component';
import { TextUnderImageComponent } from 'src/app/components/shared/text-under-image/text-under-image.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent
  },
];

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    TextBesideImageComponent,
    TextUnderImageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProjectDetailsModule { }
