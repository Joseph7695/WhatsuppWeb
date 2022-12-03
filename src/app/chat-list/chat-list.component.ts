import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  chats: string[] = ["abab", "2", "3", "4"]
  constructor() { }

  ngOnInit(): void {
    console.log(this.chats);
  }

}
