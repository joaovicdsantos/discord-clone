import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  channels: any = [];
  groups: any = [];
  messages: any = [];

  constructor(public httpClient: HttpClient, private router: Router) {
    // Verify token
    this.httpClient.get('/api/v1/server', { withCredentials: true }).subscribe({
      error: (err) => {
        if (err.status === 401 || err.status === 400) {
          router.navigate(['/login']);
        }
      },
    });
  }

  loadServer(serverId: string) {
    this.httpClient
      .get(`/api/v1/server/${serverId}`, { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          const channels = res?.channels;
          this.channels = channels.filter(
            (channel: any) => channel.channel_group === 0
          );
          this.httpClient
            .get(`/api/v1/server/${serverId}/channel-groups`, {
              withCredentials: true,
            })
            .subscribe({
              next: (res) => {
                this.groups = res;
              },
            });
        },
      });
    const welcomeScreen = document.querySelector<HTMLElement>(
      '.container-content--welcome'
    );
    welcomeScreen!.style.display = 'none';
    const loadScreen = document.querySelector<HTMLElement>(
      '.container-content--load'
    );
    loadScreen!.style.display = 'grid';
  }

  loadChannel(channelId: string) {
    this.httpClient.get(`/api/v1/channel/${channelId}/messages`).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
