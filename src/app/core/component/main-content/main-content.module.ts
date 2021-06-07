import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { MainContentComponent } from './main-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [MainContentComponent, NavbarComponent],
  imports: [ChatModule, PeopleModule],
  exports: [MainContentComponent],
})
export class MainContentModule {}
