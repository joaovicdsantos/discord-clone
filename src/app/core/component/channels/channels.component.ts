import { Component, Input } from '@angular/core';
import { Channel } from './channel/channel';
import { GroupChannel } from './group-channel/channel-group';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent {

  @Input()
  channels: any;
  groups: any;

  constructor() {
    // this.channels = CHANNELS;
    // this.groups = GRUOPS;
  }

}

const CHANNELS: Channel[] = [
  {
    type: 'text',
    name: 'rules',
  },
  {
    type: 'text',
    name: 'commands',
  },
  {
    type: 'voice',
    name: '• away',
  },
];

const GRUOPS: GroupChannel[] = [
  {
    name: '🎫 | Work/Study',
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
        name: '• Work / Study ¹',
      },
      {
        type: 'voice',
        name: '• Work / Study ²',
      },
    ],
  },
  {
    name: '🎮 | Games',
    channels: [
      {
        type: 'text',
        name: 'games',
      },
      {
        type: 'text',
        name: 'new-videos-havook',
      },
      {
        type: 'voice',
        name: '• chat ¹',
      },
      {
        type: 'voice',
        name: '• chat ²',
      },
    ],
  },
];
