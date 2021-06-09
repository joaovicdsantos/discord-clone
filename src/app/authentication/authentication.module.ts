import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
