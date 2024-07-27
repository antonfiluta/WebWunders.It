import { Component, inject } from '@angular/core';
import { TextBaseService } from '../../data/bases/text-base.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    textBaseService = inject(TextBaseService)
    
    texts: any = []

    constructor() {
      this.texts = this.textBaseService.getAboutText()
  }
}
