import { Channel } from '../channel/channel';

export class GroupChannel {
  name: string;
  channels: Channel[];

  constructor(name: string, channels: Channel[]) {
    this.name = name;
    this.channels = channels;
  }
}
