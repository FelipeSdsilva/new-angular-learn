import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../core/models/book';
import { MaterialModules } from '../../../core/modules/material.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookDetailComponent } from "./book-detail/book-detail.component";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    MaterialModules,
    RouterLink,
    RouterLinkActive,
    BookDetailComponent,
    RouterOutlet,
],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  books$: Observable<Book[]> = new Observable;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.books$;
    console.log(this.books$);
    
  }

}
