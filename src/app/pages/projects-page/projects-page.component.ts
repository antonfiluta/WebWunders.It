import { Component, inject } from '@angular/core';
import { TextBaseService } from '../../data/bases/text-base.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  templateUrl: './projects-page.component.html',
  styleUrl: '../home-page/home-page.component.css'
})
export class ProjectsPageComponent {
  textBaseService = inject(TextBaseService)
    
  texts: any = []

  constructor() {
    this.texts = this.textBaseService.getProjectsText()
}
}
