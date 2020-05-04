import { Component,
   OnInit,
  Output,
 EventEmitter,
ViewChild,
ElementRef, 
Input} from '@angular/core';
import { Lesson } from '../lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

   
  constructor() { }
  
  @Output() lessonFromList = new EventEmitter<Lesson>();
  @Input() session : {seconds: number};
  @Output() lessonTimeout = new EventEmitter<boolean>();

  lessons : Lesson[] = [
    new Lesson("../assets/ccc.mp4", "This is the description of the lesson ", "https://kalabelias.com/img/people/aba/aba_2.jpg"),
    new Lesson("../assets/ddd.mp4", "This is the description of the lesson ", "https://kalabelias.com/img/animal/penguin/penguin_2.jpg"),
    new Lesson("some other lesson", "This is the description of the lesson ", "https://kalabelias.com/img/people/aba/aba_2.jpg")
  ];

  


  ngOnInit(): void {

    setTimeout(() => {
      this.lessonTimeout.emit(true);
    }, this.session.seconds * 1000);

  }

  onLessonSelected (lessonEl : Lesson) {
    this.lessonFromList.emit(lessonEl);
  }

 

}
