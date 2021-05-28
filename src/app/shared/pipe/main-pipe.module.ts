import { NgModule } from '@angular/core';
import { MarkedPipe } from './mark/marked.component';

@NgModule({
  declarations: [MarkedPipe],
  exports: [MarkedPipe],
})
export class MainPipeModule {}
