import { Component } from '@angular/core';
import { ElectronicService } from '../../../core/services/electronic.service';
import { Electronic } from '../../../core/models/electronic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrl: './electronic-list.component.css'
})
export class ElectronicListComponent {

  electronics$: Observable<Electronic[]> = new Observable;
  constructor(private electronicService: ElectronicService) { }

  ngOnInit() {
    this.electronics$ = this.electronicService.electronics$;
  }
}
