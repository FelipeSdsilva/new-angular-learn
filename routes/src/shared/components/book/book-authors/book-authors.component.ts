import { Component } from '@angular/core';
import { MaterialModules } from '../../../../core/modules/material.module';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-authors',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './book-authors.component.html',
  styleUrl: './book-authors.component.css'
})
export class BookAuthorsComponent {

  authors$?: Observable<string[]>;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('BookAuthorsComponent');
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('authors')?.split(',') ?? []));        
  }
}
