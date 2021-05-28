import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPipeModule } from 'src/app/shared/pipe/main-pipe.module';
import { ChatComponent } from './chat.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [ChatComponent, MessageComponent],
  imports: [CommonModule, MainPipeModule],
  exports: [ChatComponent],
})
export class ChatModule {}
