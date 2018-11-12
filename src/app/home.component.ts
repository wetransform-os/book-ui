import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="col-12">
      <span>
        Go to the 
        <a routerLink="/library" class="menu-item">Library</a>
      </span>
    </div>
  `
})
export class HomeComponent {}