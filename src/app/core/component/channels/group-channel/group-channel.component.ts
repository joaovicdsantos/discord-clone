import { Component, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'group-channel',
  templateUrl: 'group-channel.component.html',
  styleUrls: ['group-channel.component.css'],
})
export class GroupChannelComponent {
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
