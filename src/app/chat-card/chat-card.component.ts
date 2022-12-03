import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {
  @Input() chatItem: any = "";
  Icon: any;
  constructor() { }

  ngOnInit(): void {
  }

}
