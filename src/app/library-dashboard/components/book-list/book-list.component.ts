import { Component, OnInit } from '@angular/core';

import { LibraryDashboardService } from '../../library-dashboard.service';

import { Book } from '../../models/book.interface';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  books: Book[];

  constructor(private libraryDashboardService: LibraryDashboardService) {}

  ngOnInit(){
    this.books = this.libraryDashboardService.getBooks();
  }
}