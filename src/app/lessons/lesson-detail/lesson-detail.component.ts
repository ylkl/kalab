import { Component, OnInit, Input, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { Lesson } from '../lesson.model';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit, DoCheck {

  @Input() lesson : Lesson;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  getUrl (item : any) {
        return item.imagePath + '.mp4' + '#t=0.1';
  }

  ngDoCheck() {

    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
    console.log('the player is : ',  player);
  }
  



}
