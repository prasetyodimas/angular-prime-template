import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({})
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
