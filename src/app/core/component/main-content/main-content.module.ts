import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { MainContentComponent } from './main-content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [MainContentComponent, NavbarComponent],
  imports: [ChatModule],
  exports: [MainContentComponent],
})
export class MainContentModule {}
