import { Component, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input()
  message: Message = new Message('', '', '', '');
}
