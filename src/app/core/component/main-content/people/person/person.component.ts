import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input()
  user: User = new User(0, '', '', '');
}
