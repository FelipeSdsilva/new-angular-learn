import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericTableComponent } from '../../shared/compoments/generic-table/generic-table.component';
import { MainService } from '../../core/services/main.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../../core/models/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [
    GenericTableComponent,
  ],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit {

  persons$: Observable<Person[]> = new Observable;
  totalElements: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Person>([]);

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.persons$ = this.mainService.getPeoples();
    this.persons$.subscribe(persons => {
      this.dataSource.data = persons;
      this.displayedColumns= Object.keys(persons[0]);
    })
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

} 
