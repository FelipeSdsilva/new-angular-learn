import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { Book } from '../../../../core/models/book';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
import { BookService } from '../../../../core/services/book.service';
import { MaterialModules } from '../../../../core/modules/material.module';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    MaterialModules,
    RouterOutlet,
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = new Observable;
  index: number | null = 0;
  authors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router) { }

    ngOnInit() {
      this.book$ = this.route.paramMap
        .pipe(
          tap((params: ParamMap) => {
            const indexParam = params.get('index');
            this.index = indexParam !== null ? +indexParam : null; 
          }),
          switchMap(() => this.index !== null 
            ? this.bookService.get(this.index) 
            : EMPTY  
          ),
          tap((b) => this.authors = b ? b.authors : [])
        );
    }


  remove() {

    this.bookService.remove(this.index != null ? this.index : 13);
    this.router.navigateByUrl("books");
  }

  goAuthors() {
    let url = '/books/' + this.index + '/authors';
    this.router.navigate([url, { authors: this.authors }])
  }

}