import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LibraryListComponent } from './components/library-list/library-list.component';

//Services
import { LibraryDashboardService } from './library-dashboard.service';

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
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    LibraryDashboardService
  ]
})
export class LibraryDashboardModule {}