import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent implements OnInit {

  ngOnInit(): void {

  }

  foods: string[] = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Soup'];
  foodsSelectd: string[] = [];
  i: number = 0;
  btnName: string = "My button ";
  spinnerMode: ProgressSpinnerMode = "determinate";
  btnEnable: boolean = true;
  selectDisabled: boolean = false;
  inputName?: string = 'TEst';

  save() {
    console.log("Clicou!");
  }

  increment() {
    this.i++;
    this.btnName = "This button as clicked " + this.i + " times!";
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
      if (this.i >= 100) {
        this.i = 0;
      }
    }, 3000);
  }

  cbChange(event: MatCheckboxChange) {
    console.log(event.checked)

    this.selectDisabled = event.checked;
    console.log(this.selectDisabled)
  }

  selectionChange(event: MatSelectChange) {
    console.log(event)
    this.foodsSelectd.push(event.value);
    console.log(this.foodsSelectd)
  }

  inputEvent(event: any) {
    console.log(event.target.value)

    this.inputName = event.target.value;
  }
}
