import { Component, Input } from "@angular/core";

@Component({
  selector: 'channel-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input()
  channelImageUrl: string = "https://i.pinimg.com/736x/34/91/f3/3491f3e50ab6a4d51a348f9cc2419842.jpg";

  @Input()
  channelName: string = "Início";

}
