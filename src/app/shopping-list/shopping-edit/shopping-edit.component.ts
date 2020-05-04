import {
  Component,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { Lesson } from '../../lessons/lesson.model';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  @ViewChild('imagepathInput') imagepathInputRef: ElementRef;
  @Output() lessonAdded = new EventEmitter<Lesson>();


  ngOnInit(): void {
  }

  addItem() {
    const lesson = new Lesson(this.nameInputRef.nativeElement.value, this.descriptionInputRef.nativeElement.value, this.imagepathInputRef.nativeElement.value);
    this.lessonAdded.emit(lesson);


  }

}
