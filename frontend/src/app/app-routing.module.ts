import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ResumePageComponent } from './components/pages/resume-page/resume-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'resume', component: ResumePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
