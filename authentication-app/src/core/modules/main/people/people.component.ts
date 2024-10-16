import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../main.service';
import { Person } from '../../../models/person';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {

  persons$: Person[] = [];
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
    this.mainService.getPeoples(this.pageIndex, this.pageSize).subscribe((data) => {
      this.persons$ = data.content;
      this.dataSource.data = data.content;
      this.displayedColumns= Object.keys(this.persons$[0]);
      this.totalElements = data.totalElements;
    });
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