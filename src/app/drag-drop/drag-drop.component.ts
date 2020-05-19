import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  CdkDragDrop, moveItemInArray, transferArrayItem
} from '@angular/cdk/drag-drop';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor(private logger: LoggingService) {

    
   }
  //question: string = 'cat' // this is going to be an input parameter
  // if cat is the question  
  @Input() draggableItems: { question: string, imagePath: string }[] =
      [
       
       { question: 'deer', imagePath: 'https://kalabelias.com/img/animal/deer/deer_2.jpg'},
       //{ question: 'chick', imagePath: 'https://kalabelias.com/img/animal/chick/chick_2.jpg'},
       //{ question: 'fox', imagePath: 'https://kalabelias.com/img/animal/fox/fox_3.jpg'},
      // { question: 'yael', imagePath: 'https://kalabelias.com/img/people/yael/yael_3.jpg'},
       //{ question: 'aba', imagePath: 'https://kalabelias.com/img/people/aba/aba_2.jpg'},
       //{ question: 'kalab', imagePath: 'https://kalabelias.com/img/people/kalab/kalab_3.jpg'},
       { question: 'mama', imagePath: 'https://kalabelias.com/img/people/mama/mama_2.jpg'}


      ];

     @Output() isAllAnswered = new EventEmitter<boolean>();

  
  questions: any[] = [];  //current Set of questions
  answers: any[] = [];
  ids: string[] = [];
  currentDraggableItem : { question: string, imagePath: string } = null;
  draggedCounter : number = 0;
  hideNextButton : boolean = true;

  ngOnInit(): void {

    this.setCurrentDraggableItem();
  }

  private setCurrentDraggableItem() {
    this.questions = [];
    console.log('inside setcurrentDra.....');
    this.answers = [];
    this.ids = [];

    this.currentDraggableItem = this.draggableItems.shift();

    

    for (let i = 0; i < this.currentDraggableItem.question.length; i++) {
    
      let slicedQuestion = this.currentDraggableItem.question.split('').slice(i, i + 1);
      this.questions.push(slicedQuestion);
      this.answers.push([]);
      this.ids.push(slicedQuestion[0]+i); // make the id unique
    }
    this.draggedCounter++;
    
  }

  drop(event: CdkDragDrop<string[]>) {
    this.logger.log(event);
    this.logger.log({ eventlog: event.previousContainer.data[0] });
    if (event.previousContainer === event.container) {
      console.log('stays in the same array');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('transfering');
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
           
            

    }
    this.updateNextButton(); //an observable will change this in the future
    
    this.emitIsAllAnsweredEvent();
    
  }

  emitIsAllAnsweredEvent() {
    if (this.draggableItems.length === 0 && this.questions.every( item => {
      return item.length === 0;
    })) {
      alert('Great Job!');
     this.isAllAnswered.emit();
    } 
  }

  /**
   * Display the next button  condition: not all draggableItems are dragged && no itms left in the  questions[]    * 
   */
  updateNextButton() {
     
    if (this.draggableItems.length === 0 && this.questions.every( item => {
      return item.length === 0;
    })) {
      this.hideNextButton = true;
      return;
    } 

     if (this.questions.some( item => {
      return item.length === 1;
    })) {
      this.hideNextButton = true;
      return;
    } 

    if(this.draggableItems.length === 0 ){
      this.hideNextButton = true;
    }

    this.hideNextButton = false;


  }

  nextDraggableItem () {
    this.hideNextButton = true;
    this.setCurrentDraggableItem();
  }

  doesThisKick() {
    console.log('I doubt if this does kick');
    return false;
  }

  

 
}
