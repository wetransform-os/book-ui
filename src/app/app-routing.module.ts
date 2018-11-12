import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { LibraryDashboardModule } from './library-dashboard/library-dashboard.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'library', component: LibraryDashboardComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LibraryDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
