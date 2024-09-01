import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from '../../modules/material.modules';
import { BasicCreationComponent } from "./components/basic-creation/basic-creation.component";
import { OperatorsComponent } from "./components/operators/operators.component";
import { AsyncComponent } from './components/async/async.component';
import { ErrorHandlingComponent } from "./components/error-handling/error-handling.component";
import { DragAndDropComponent } from "./components/drag-and-drop/drag-and-drop.component";
import { UnsubscribeComponent } from "./components/unsubscribe/unsubscribe.component";
import { SwitchMergeComponent } from "./components/switch-merge/switch-merge.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    BasicCreationComponent,
    OperatorsComponent,
    AsyncComponent,
    ErrorHandlingComponent,
    DragAndDropComponent,
    UnsubscribeComponent,
    SwitchMergeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  options: string = '';

}
