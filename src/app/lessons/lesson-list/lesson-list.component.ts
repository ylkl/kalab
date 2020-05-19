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

  // this.name = name;
  // this.description = desc;
  // this.imagePath = imagePath;

  // new Lesson("HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation","HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation. ", "HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation."),
  // new Lesson("LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids","LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids ", "LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids")    
  lessons : Lesson[] = [
    new Lesson("HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation","HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation. ", "../assets/HappyFridayRequestAcceptedBestofASMRJERUSALEMGymChalkCompilation."),
    new Lesson("LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids","LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids ", "../assets/LearnwithLittleBabyBumThingsThatGoFastNurseryRhymesforBabiesSongsforKids")    
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
