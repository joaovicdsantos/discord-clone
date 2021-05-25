import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels.component';
import { GroupChannelComponent } from './group-channel/group-channel.component';

@NgModule({
  declarations: [ChannelsComponent, ChannelComponent, GroupChannelComponent],
  exports: [ChannelsComponent],
  imports: [CommonModule],
})
export class ChannelsModule {}
