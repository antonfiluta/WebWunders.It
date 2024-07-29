import { Component, inject } from '@angular/core';
import { TextBaseService } from '../../data/bases/text-base.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrls: [
    './contact-page.component.css',
    '../home-page/home-page.component.css',
  ]
})
export class ContactPageComponent {
  textBaseService = inject(TextBaseService)

  contacts = this.textBaseService.getContacts()
}
