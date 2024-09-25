import { Routes } from '@angular/router';
import { BookComponent } from '../shared/components/book/book.component';
import { DvdComponent } from '../shared/components/dvd/dvd.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { DvdDetailComponent } from '../shared/components/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from '../shared/components/dvd/dvd-form/dvd-form.component';
import { BookDetailComponent } from '../shared/components/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from '../shared/components/book/book-authors/book-authors.component';

export const routes: Routes = [
  { path: 'dvds', component: DvdComponent },
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: ':index',
        component: BookDetailComponent, children: [
          { path: 'authors', component: BookAuthorsComponent }
        ]
      },

    ]
  },
  { path: 'electronics', loadChildren: () => import('./electronics/electronics-routing.module').then(m => m.ElectronicsRoutingModule) },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: "dvds" },
  { path: '**', component: PageNotFoundComponent },
]
