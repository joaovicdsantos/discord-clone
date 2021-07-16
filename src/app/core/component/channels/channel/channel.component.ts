import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Channel } from './channel';

@Component({
  selector: 'channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.css'],
})
export class ChannelComponent {
  @Input()
  channel: Channel = new Channel('', '', '');

  @Output()
  channelId = new EventEmitter();

  changeChannel(e: any, channel: Channel): void {
    this.channelId.emit(channel.id);
    this.clearSelection();
    e.currentTarget.classList.add('active');
  }

  clearSelection() {
    const channels = document.querySelectorAll('.channel');
    channels.forEach((channel) => {
      channel.classList.remove('active');
    });
  }
}
