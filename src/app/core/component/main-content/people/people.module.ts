import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PeopleGroupComponent } from './people-group/people-group.component';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [PeopleComponent, PeopleGroupComponent, PersonComponent],
  imports: [BrowserModule],
  exports: [PeopleComponent],
})
export class PeopleModule {}
