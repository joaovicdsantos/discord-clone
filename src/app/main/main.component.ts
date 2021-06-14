import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelComponent } from '../core/component/channels/channel/channel.component';
import { ChannelsComponent } from '../core/component/channels/channels.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  channels: any = [];
  groups: any = [];

  constructor(public httpClient: HttpClient, private router: Router) {
    // Verify token
    this.httpClient.get('/api/v1/server', { withCredentials: true }).subscribe({
      error: err => {
        if (err.status === 401 || err.status === 400) {
          router.navigate(['/login'])
        }
      }
    });
  }

  loadServer(serverId: string) {
    this.httpClient.get(`/api/v1/server/${serverId}`, { withCredentials: true }).subscribe({
      next: (res: any) => {
        const channels = res?.channels;
        this.channels = channels.filter((channel: any) => channel.channel_group === 0 );
        this.groups = channels
        .filter((channel: any) => channel.channel_group !== 0 )
        .reduce((groups: any, channel: any) => {
          (groups[channel.channel_group] = groups[channel.channel_group] || []).push(channel);
          return groups;
        } , { })
        console.log(channels)
        Object.keys(channels)
          .forEach((group: any, index: any)  => {
            this.httpClient.get(`/api/v1/channel-group/${index}`, { withCredentials: true }).subscribe({
              next: (res: any) => {
                this.groups.push({
                  name: res.name,
                  channels: group
                })
              }
            });
          });
      }
    });
    const welcomeScreen = document.querySelector<HTMLElement>('.container-content--welcome');
    welcomeScreen!.style.display = 'none';
    const loadScreen = document.querySelector<HTMLElement>('.container-content--load');
    loadScreen!.style.display = 'grid';
  }

}
