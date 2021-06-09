import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    AuthenticationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'auth',
        component: AuthenticationComponent,
      },
    ]),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
