import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels.component';
import { ChannelGroupComponent } from './group-channel/channel-group.component';

@NgModule({
  declarations: [ChannelsComponent, ChannelComponent, ChannelGroupComponent],
  exports: [ChannelsComponent],
  imports: [CommonModule],
})
export class ChannelsModule {}
