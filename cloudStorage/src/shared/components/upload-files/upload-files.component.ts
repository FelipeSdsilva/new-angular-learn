import { Component, OnInit } from '@angular/core';
import { MaterialModules } from '../../../core/modules/angular-material/material-modules';
import { FilesService } from '../../../core/services/files.service';
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { FileEntry } from '../../../core/models/fileentry.model';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [MaterialModules, DropzoneComponent],
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css'
})
export class UploadFilesComponent implements OnInit {

  files: FileEntry[] = [];

  constructor(private filesService: FilesService) { }

  ngOnInit() {
  }

  onDropFiles(files: FileList) {
    this.files.splice(0, this.files.length);
    for (let i = 0; i < files.length; i++) {
      this.files.push({
        file: files.item(i), percentage: null, uploading: null,
        bytesuploaded: null, canceled: null, error: null, finished: null,
        paused: null, state: null, task: null
      });
    }
  }

  removeFileFromList(i) {
    this.files.splice(i, 1);
  }

  uploadAll() {
    for (let i = 0; i < this.files.length; i++)
      this.filesService.upload(this.files[i]);
  }

}

