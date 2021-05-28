import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelsModule } from './channels/channels.module';
import { MainContentModule } from './main-content/main-content.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [CommonModule, SidenavModule, ChannelsModule, MainContentModule],
  exports: [SidenavModule, ChannelsModule, MainContentModule],
})
export class CoreModule {}
