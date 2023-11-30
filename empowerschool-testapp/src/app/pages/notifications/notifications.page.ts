import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [
    "New message received from teacher",
    "Your leave request has been accepted",
    "Event reminder: Class at 2 PM",
    "Congratulations! You've earned a badge"
  ]

  constructor() { }

  ngOnInit() {
  }

}
