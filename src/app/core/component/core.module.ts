import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChannelsModule } from "./channels/channels.module";
import { SidenavModule } from "./sidenav/sidenav.module";

@NgModule({
  imports: [
    CommonModule,
    SidenavModule,
    ChannelsModule
  ],
  exports: [
    SidenavModule,
    ChannelsModule
  ]
})
export class CoreModule {

}
