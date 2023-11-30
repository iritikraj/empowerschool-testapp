import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public names = [
    'Punit Sir',
    'Rahul Sir',
    'Sunita Maam',
    'Anita Maam',
    'Vikas Sir',
    'Deepika Maam',
    'Amit Sir',
    'Rajesh Sir',
    'Shilpa Maam',
    'Neeta Maam',
    'Arun Sir',
    'Kavita Maam',
    'Vishal Sir',
  ];
  items: { name: string; unread: boolean }[] = [];

  constructor() { }

  ngOnInit() {
    this.addItemToTop(3);
  }

  chooseRandomName(): string {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  addItemToTop = (count: any, unread = false) => {
    const newItems = [];
    for (let i = 0; i < count; i++) {
      newItems.push({
        name: this.chooseRandomName(),
        unread,
      });
    }

    this.items = newItems.concat(this.items);
  }

  handleRefresh = (event: any) => {
    setTimeout(() => {
      this.addItemToTop(3, true);
      event.target.complete();
    }, 2000);
  };
}
