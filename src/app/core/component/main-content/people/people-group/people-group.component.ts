import { Component, Input } from '@angular/core';
import { User } from '../person/user';

@Component({
  selector: 'people-group',
  templateUrl: './people-group.component.html',
  styleUrls: ['./people-group.component.css'],
})
export class PeopleGroupComponent {
  @Input()
  title: string = 'Líder';
  users: User[] = [];

  constructor() {
    this.users = USERS;
  }
}

const USERS: User[] = [
  {
    id: 1,
    image_url:
      'https://cdn.discordapp.com/avatars/262703595969970177/aabfc0d94731ab0aa7b82b6f921a40c6.png?size=128',
    username: 'Matheus (Mizul)',
    status: "I'm just getting started!",
  },
];
