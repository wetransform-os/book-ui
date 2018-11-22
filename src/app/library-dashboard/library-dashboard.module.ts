import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  }
];

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: []
})
export class LibraryDashboardModule {}