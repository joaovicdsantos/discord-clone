import { Component, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'group-channel',
  templateUrl: 'channel-group.component.html',
  styleUrls: ['channel-group.component.css'],
})
export class ChannelGroupComponent {
  @Input()
  group: any = {};

  drag(e: any): void {
    const chevron = e.currentTarget.querySelector('.chevron');
    const channelsContainer = e.currentTarget.parentNode.querySelector(
      '.channels-container'
    );
    channelsContainer.style.display =
      channelsContainer.style.display === 'none' ? 'block' : 'none';
    chevron.style.transform =
      chevron.style.transform === 'rotate(-90deg)'
        ? 'rotate(0)'
        : 'rotate(-90deg)';
  }
}
