import { Component, Input } from '@angular/core';
import { Channel } from './channel';

@Component({
  selector: 'channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.css'],
})
export class ChannelComponent {
  @Input()
  channel: Channel = new Channel('', '');

  changeChannel(e: any, channel: Channel): void {
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
