import { Component, OnInit, Output } from '@angular/core';
import { Lesson } from './lesson.model';
import { Router, ActivatedRoute } from '@angular/router';


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

  
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSuccess () {
      this.displayVidoeComponent = !this.displayVidoeComponent;
  }

  /**
   * when it times out, toggle the displayVidoeComponent
   */

  //on lesson timout, we should navigate to a new route. This can be a variable. But for now we just navigate to the page where it displays a list of videos
  onLessonTimeout () {
    //console.log('---activated Route: ', this.route);
    //this.router.navigate(['../lessonlist'], {relativeTo: this.route });
    
    this.router.navigate(['/']);
    //this.displayVidoeComponent = !this.displayVidoeComponent;
  }

}
