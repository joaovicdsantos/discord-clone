import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent {
  @Input()
  channels: any;

  @Input()
  groups: any;

  @Output()
  channelId = new EventEmitter();

  setChannelId($event: any) {
    this.channelId.emit($event)
  }
}
