import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.scss'],
})
export class OurCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  courses = [
    {
      name: 'Mindful course creation',
      category: 'Mount Orange Community',
      progress: '.50',
      percentageCompleted: '50%'
    },
    {
      name: 'Celebrating cultures',
      category: 'Society and environment',
      progress: '.27',
      percentageCompleted: '27%'
    },
    {
      name: 'Digital Literacy',
      category: 'Art and Media',
      progress: '.42',
      percentageCompleted: '42%'
    },
  ]
}
