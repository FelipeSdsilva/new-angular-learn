import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() => this.bookSubject$.next([
        { title: "Book 1", pages: 200, authors: ["john", "nicole"] },
        { title: "Book 2", pages: 100, authors: ["mily"] },
        { title: "Book 3", pages: 300, authors: ["fred"] },
        { title: "Book 4", pages: 230, authors: ["ane", "peter", "samuel"] },
        { title: "Book 5", pages: 130, authors: ["paul", "john"] },
      ]))
  }

  add(b: Book) {
    this.bookSubject$.getValue().push(b);
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i < books.length)
      books.splice(i, 1);
  }

  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => {
        if (i >= 0 && i < books.length)
          return books[i]
        else
          throw new Error('Invalid index');
      },
        delay(1000)
      ));
  }
}
