import { Component, OnInit } from '@angular/core';
import { MaterialModules } from '../../../core/modules/angular-material/material-modules';
import { FilesService } from '../../../core/services/files.service';
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { FileEntry } from '../../../core/models/fileentry.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [MaterialModules, DropzoneComponent],
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css'] // Corrigido 'styleUrl' para 'styleUrls'
})
export class UploadFilesComponent implements OnInit {

  files: FileEntry[] = [];

  constructor(private filesService: FilesService) { }

  ngOnInit(): void { }

  onDropFiles(files: FileList): void {
    this.files = []; // Reseta a lista
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        this.files.push({
          file,
          task: undefined,
          percentage: new Observable(),
          uploading: new Observable(),
          finished: new Observable(),
          paused: new Observable(),
          error: new Observable(),
          canceled: new Observable(),
          bytesUploaded: new Observable(),
          state: new Observable(),
        });
      }
    }
  }

  removeFileFromList(index: number): void {
    this.files.splice(index, 1);
  }

  uploadAll(): void {
    this.files.forEach((fileEntry, index) => {
      const upload$ = this.filesService.uploadFile(fileEntry.file);

      fileEntry.uploading = upload$.pipe(map(progress => progress < 100));
      fileEntry.percentage = upload$;

      upload$.subscribe({
        next: (progress) => console.log(`File ${fileEntry.file.name} is ${progress}% uploaded`),
        complete: () => {
          console.log(`File ${fileEntry.file.name} uploaded successfully`);
          fileEntry.finished = new Observable((observer) => {
            observer.next(true);
            observer.complete();
          });
        },
        error: (error) => {
          console.error(`Error uploading file ${fileEntry.file.name}:`, error);
          fileEntry.error = new Observable((observer) => {
            observer.next(true);
            observer.complete();
          });
        },
      });
    });
  }
}