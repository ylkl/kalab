import {
  Component,
  OnInit
} from '@angular/core';

import { Lesson } from '../lessons/lesson.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  lessons = [];
  constructor() { }

  ngOnInit(): void {
  }

  onLessonAdded(lesson: Lesson) {
    this.lessons.push(lesson);
  }

}
