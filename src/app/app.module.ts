import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatviewComponent } from './chatview/chatview.component';
import { ChatCardComponent } from './chat-card/chat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatviewComponent,
    ChatCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
