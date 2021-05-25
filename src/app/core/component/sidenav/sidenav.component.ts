import { Component } from "@angular/core";
import { ServerModel } from "./server";

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  servers: ServerModel[];

  constructor() {
    this.servers = SERVERS;
  }

}

const SERVERS : ServerModel[] = [
  {
    name: 'Efex',
    imageUrl: 'https://cdn.discordapp.com/icons/559375487433048075/b8aeb13a8d40f573e5f2dfe1d62ddd23.png?size=128'
  },
  {
    name: 'BitCode',
    imageUrl: 'https://cdn.discordapp.com/icons/762608638912364544/ce77c53576128878cd0d6d84bda971bd.png?size=128'
  },
  {
    name: 'BurnOut Brasil',
    imageUrl: 'https://cdn.discordapp.com/icons/537765244702031913/e095942640c7c1c64ff8c9350a2bff94.png?size=128'
  },
  {
    name: 'FatalErrors',
    imageUrl: 'https://cdn.discordapp.com/icons/810989329446207588/c05e0c20d5ea2feefbc80abf316da54d.png?size=128'
  }
]
