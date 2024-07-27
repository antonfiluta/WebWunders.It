import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
      array = [
      {
        name: 'About',
        link: ''
      },
      {
        name: 'Projects',
        link: 'projects'
      },
      {
        name: 'Contacts',
        link: 'contact'
      }
    ]

    isOnTop = false

    ngOnInit() {
      window.addEventListener('scroll', ()=> {
        if (this.getPos() === 0) {
          this.isOnTop = true
        } else {
          this.isOnTop = false
        }
      })
    }

    getPos() {
      return document.getElementById('nav')?.getBoundingClientRect().y
    }
}
