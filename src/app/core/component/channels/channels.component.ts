import { Component } from '@angular/core';
import { Channel } from './channel/channel';

@Component({
  selector: 'channels',
  templateUrl: 'channels.component.html',
  styleUrls: ['channels.component.css'],
})
export class ChannelsComponent {
  channels: Channel[];
  groups: any;

  constructor() {
    this.channels = CHANNELS;
    this.groups = GRUOPS;
  }
}

const CHANNELS: Channel[] = [
  {
    type: 'text',
    name: 'geral',
  },
  {
    type: 'voice',
    name: 'bate-papo',
  },
];

const GRUOPS = [
  {
    name: 'Work/Study',
    channels: [
      {
        type: 'text',
        name: 'links',
      },
      {
        type: 'text',
        name: 'linkedin',
      },
      {
        type: 'text',
        name: 'work-station',
      },
      {
        type: 'voice',
        name: 'Work / Study¹',
      },
      {
        type: 'voice',
        name: 'Work / Study²',
      },
    ],
  },
];
