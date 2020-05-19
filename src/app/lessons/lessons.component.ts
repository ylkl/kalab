import { Component, OnInit, Output } from '@angular/core';
import { Lesson } from './lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  selectedLesson : Lesson;
  displayVidoeComponent: boolean = false;
  rewardScore : any = {point : 1};
  session : any = {seconds: 5*60};

  
  constructor() { }

  ngOnInit(): void {
  }

  onSuccess () {
    this.displayVidoeComponent = !this.displayVidoeComponent;
  }

  /**
   * when it times out, toggle the displayVidoeComponent
   */
  onLessonTimeout () {
    this.displayVidoeComponent = !this.displayVidoeComponent;
  }

}
