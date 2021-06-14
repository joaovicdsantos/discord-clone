import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  servers: any;

  @Output()
  serverId = new EventEmitter();

  home = {
    name: "Home",
    image_url: 'assets/img/logo.png'
  }

  constructor(private httpClient: HttpClient) {
    httpClient.get('/api/v1/server').subscribe({
      next: res => {
        this.servers = res;
      }
    })
  }

  setServerId(serverId: string): void {
    this.serverId.emit(serverId);
  }

  logout(): void {
    // Clear cookie
  }

}
