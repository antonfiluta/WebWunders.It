import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'projects', component: ProjectsPageComponent},
];
