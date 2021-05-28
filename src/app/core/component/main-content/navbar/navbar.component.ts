import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  active(e: any): void {
    this.clearActive();
    e.currentTarget.classList.add('active');
  }
  clearActive() {
    document.querySelectorAll('.button-modal').forEach((button) => {
      button.classList.remove('active');
    });
  }
}
