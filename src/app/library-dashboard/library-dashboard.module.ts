import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LibraryListComponent } from './components/library-list/library-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

//Services
import { LibraryDashboardService } from './library-dashboard.service';

const routes: Routes = [
  {
    path: 'books',
    component: LibraryListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  }
];

@NgModule({
  declarations: [
    LibraryListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    LibraryDashboardService
  ]
})
export class LibraryDashboardModule {}