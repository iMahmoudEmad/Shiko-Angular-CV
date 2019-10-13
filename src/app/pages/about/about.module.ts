import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutHeaderComponent } from 'src/app/components/about-header/about-header.component';
import { WhoAmIComponent } from 'src/app/components/who-am-i/who-am-i.component';
import { SectionItemsComponent } from 'src/app/components/section-items/section-items.component';
import { CaseStudiesComponent } from 'src/app/components/case-studies/case-studies.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    AboutHeaderComponent,
    WhoAmIComponent,
    SectionItemsComponent,
    CaseStudiesComponent
  ],
  exports: [RouterModule]
})
export class AboutModule { }
