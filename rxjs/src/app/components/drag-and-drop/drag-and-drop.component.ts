import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css'
})
export class DragAndDropComponent {

  @ViewChild('myrect') myrect!: ElementRef;

  top: number = 40;
  left: number = 40;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.myrect) {
      const mouseDown = fromEvent<MouseEvent>(this.myrect.nativeElement, 'mousedown');
      const mouseMove = fromEvent<MouseEvent>(document, 'mousemove');
      const mouseUp = fromEvent<MouseEvent>(document, 'mouseup');

      mouseDown.subscribe((startEvent: MouseEvent) => {
        const startX = startEvent.clientX;
        const startY = startEvent.clientY;
        const initialTop = this.top;
        const initialLeft = this.left;

        const moveSubscription = mouseMove
          .pipe(takeUntil(mouseUp)) // Para o movimento ao liberar o botão do mouse
          .subscribe((moveEvent: MouseEvent) => {
           
           console.log(moveEvent)
            const currentX = moveEvent.clientX;
            const currentY = moveEvent.clientY;

            this.top = initialTop + (currentY - startY);
            this.left = initialLeft + (currentX - startX);

            this.myrect.nativeElement.style.top = `${this.top}px`;
            this.myrect.nativeElement.style.left = `${this.left}px`;
          });

        mouseUp.subscribe(() => {
          moveSubscription.unsubscribe();
        });
      });
    } else {
      console.error('myrect is not defined in ngAfterViewInit');
    }
  }

}
