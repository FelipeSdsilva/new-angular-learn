import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadFilesComponent } from "../shared/components/upload-files/upload-files.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadFilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cloudStorage';
}
