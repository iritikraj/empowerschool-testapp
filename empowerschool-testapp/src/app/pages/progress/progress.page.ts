import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  segment: string | undefined;
  constructor() { 
    this.segment = "course";
  }

  ngOnInit() {
  }

}
