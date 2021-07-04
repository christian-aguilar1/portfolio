import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about-me', component: AboutMeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
