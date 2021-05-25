import { Component } from '@angular/core';
import { Channel } from './channel';

@Component({
  selector: 'channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.css'],
})
export class ChannelComponent {}

const CHANNELS: Channel[] = [
  {
    type: 'text',
    name: 'Geral',
  },
];
