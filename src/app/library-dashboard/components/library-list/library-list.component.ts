import { Component, OnInit } from '@angular/core';

import { LibraryDashboardService } from './../../library-dashboard.service';

import { Book } from '../../models/Book.interface';

@Component({
  selector: 'library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {
  
  books: Book[];

  constructor(private libraryDashboardService: LibraryDashboardService) {}

  ngOnInit(){
    this.books = this.libraryDashboardService.getBooks();
  }
}