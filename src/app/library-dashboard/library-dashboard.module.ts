import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryListComponent } from './components/library-list/library-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryListComponent
  }
];

@NgModule({
  declarations: [
    LibraryListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class LibraryDashboardModule {}