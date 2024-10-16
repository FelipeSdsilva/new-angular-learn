import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../core/modules/material-modules';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T> implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<T> = new MatTableDataSource;

  totalElements: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
