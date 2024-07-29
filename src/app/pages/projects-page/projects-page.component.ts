import { Component, inject} from '@angular/core';
import { TextBaseService } from '../../data/bases/text-base.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  templateUrl: './projects-page.component.html',
  styleUrls: [
    '../home-page/home-page.component.css',
    'projects-page.component.css'
  ]
})
export class ProjectsPageComponent {
  textBaseService = inject(TextBaseService)
    
  information: any = []

  constructor() {
    this.information = this.textBaseService.getProjectsText()
  }
}