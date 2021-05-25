import { NgModule } from "@angular/core";
import { ChannelComponent } from "./channel/channel.component";
import { ChannelsComponent } from "./channels.component";


@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelComponent
  ],
  exports: [
    ChannelsComponent
  ]
})
export class ChannelsModule {

}
