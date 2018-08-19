import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { MarkdownModule } from 'ngx-markdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
