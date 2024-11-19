import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  standalone: true,
  imports: [],
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.css'
})
export class DropzoneComponent {

  isDraggingOver = false;

  @Output()
  droppedfiles: EventEmitter<FileList> = new EventEmitter<FileList>();
  
  constructor() { }

  ngOnInit() {
  }

  onDragOverEvent(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragLeaveEvent(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = false;
  }

  onDropEvent(event: DragEvent) {
    event.preventDefault();
    this.droppedfiles.emit(event.dataTransfer?.files);
  }

}
