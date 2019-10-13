import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
    data: {animation: 'isRight'}
  },
  {
    path: 'project',
    loadChildren: './pages/project-details/project-details.module#ProjectDetailsModule',
    data: {animation: 'isRight'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
