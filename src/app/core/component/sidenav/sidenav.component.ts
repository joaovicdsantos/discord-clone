import { Component, OnInit } from "@angular/core";
import { Channel } from "./channel";

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  channels: Channel[];

  constructor() {
    this.channels = CHANNELS;
  }

}

const CHANNELS : Channel[] = [
  {
    name: 'Efex',
    imageUrl: 'https://cdn.discordapp.com/icons/559375487433048075/b8aeb13a8d40f573e5f2dfe1d62ddd23.png?size=128'
  },
  {
    name: 'BitCode',
    imageUrl: 'https://cdn.discordapp.com/icons/762608638912364544/ce77c53576128878cd0d6d84bda971bd.png?size=128'
  }
]
