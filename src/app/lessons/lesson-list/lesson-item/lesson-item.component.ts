import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Lesson } from '../../lesson.model';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit {

  constructor() { }

  @Output() lessonSelected = new EventEmitter<void>();

  @Input() lesson: Lesson;
  ngOnInit(): void {
  }

  onselected() {
    this.lessonSelected.emit();
  }

//   getUrl (item : any) {
//     return item.name + '#t=0.1';
// }

getImagePath(lesson : Lesson) {
  console.log('lesson.imagePath: ' , lesson.imagePath);
  return lesson.imagePath + ".jpg";
  //return "../assets/LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids.jpg"
}

}
