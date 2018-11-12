import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <span>
        Go to the 
        <a routerLink="/books" class="menu-item">Library</a>
      </span>
    </div>
  `
})
export class HomeComponent {}