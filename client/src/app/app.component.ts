import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../core/material.module';
import { SocketIoService } from '../core/services/socket-io.service';
import { Message } from './message.model';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nickname: string = '';
  message: string = '';
  messages: Message[] = [];
  private subscriptionMessages: Subscription = new Subscription;
  private subscriptionList: Subscription = new Subscription;

  @ViewChild(MatList, { read: ElementRef, static: true }) list!: ElementRef;
  @ViewChildren(MatListItem) listItems!: QueryList<MatListItem>;

  constructor(
    private socketService: SocketIoService) {
  }

  ngOnInit() {
    this.subscriptionMessages = this.socketService.messages()
      .subscribe((m: any) => {
        const message: Message = {
          from: m.from,
          message: m.message
        };
        this.messages.push(message);
      });

  }

  ngAfterViewInit() {
    this.subscriptionList = this.listItems?.changes.subscribe((e) => {
      this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
      // console.log(this.list.nativeElement.scrollHeight);
    });
  }

  send() {
    this.socketService.send({
      from: this.nickname,
      message: this.message
    });
    this.message = '';
  }

  ngOnDestroy() {
    this.subscriptionMessages.unsubscribe();
    this.subscriptionList?.unsubscribe();
  }
}