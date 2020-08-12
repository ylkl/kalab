import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  CdkDragDrop, moveItemInArray, transferArrayItem
} from '@angular/cdk/drag-drop';
import { LoggingService } from '../logging.service';
import { stringify } from 'querystring';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',

  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor(private logger: LoggingService , private route: ActivatedRoute) {


  }
  @Input() draggableItems: { question: string, imagePath: string }[] =
    [

      { question: 'pot', imagePath: '../assets/pot.jpg' },
      { question: 'knife', imagePath: '../assets/knife.jpg' },
      { question: 'chair', imagePath: '../assets/chair.jpg' },
      { question: 'bed', imagePath: '../assets/bed.jpg' },
      { question: 'ladle', imagePath: '../assets/ladle.jpg' },
      { question: 'socks', imagePath: '../assets/socks.jpg' },
      { question: 'phone', imagePath: '../assets/phone.jpg' },
      { question: 'underwear', imagePath: '../assets/underwear.jpg' },
      { question: 'shorts', imagePath: '../assets/shorts.jpg' },
      { question: 't-shirt', imagePath: '../assets/t-shirt.jpg' },
      { question: 'bowl', imagePath: '../assets/bowl.jpg' },
      { question: 'floss', imagePath: '../assets/floss.jpg' },
      { question: 'fliker', imagePath: '../assets/fliker.jpg' },
      { question: 'cat', imagePath: '../assets/cat.jpg' },      
      { question: 'bat', imagePath: '../assets/bat.jpg' },
      { question: 'cow', imagePath: '../assets/cow.jpg' },
      { question: 'dog', imagePath: '../assets/dog.jpg' },
      { question: 'fox', imagePath: '../assets/fox.jpg' },
      { question: 'lion', imagePath: '../assets/lion.jpg' },
      //{ question: 'owl', imagePath: 'https://kalabelias.com/img/animal/owl/owl_3.jpg' },
      { question: 'pig', imagePath: '../assets/pig.jpg' },
      { question: 'yael', imagePath: '../assets/yael.jpg' },
       { question: 'aba', imagePath: '../assets/aba.jpg' },
       { question: 'edna', imagePath: '../assets/edna.jpg' },
      // { question: 'mama', imagePath: 'https://kalabelias.com/img/people/mama/mama_2.jpg' },
      
      // { question: 'kalab', imagePath: 'https://kalabelias.com/img/people/kalab/kalab_2.jpg' },
      { question: 'plate', imagePath: '../assets/plate.jpg' },
      { question: 'spoon', imagePath: '../assets/spoon.jpg' },
      { question: 'bus', imagePath: '../assets/bus.png' },
      { question: 'water', imagePath: '../assets/water.jpg' },
      { question: 'rice', imagePath: '../assets/rice.jpg' },
      { question: 'monkey', imagePath: '../assets/monkey.jpg' },
      { question: 'apple', imagePath: '../assets/apple.jpg' },
      { question: 'car', imagePath: '../assets/car.jpg' },
      { question: 'jacket', imagePath: '../assets/jacket.jpg' },
      { question: 'shoes', imagePath: '../assets/shoes.jpg' },      
      { question: 'fork', imagePath: '../assets/fork.jpg' },
      { question: 'microwave', imagePath: '../assets/microwave.jpg' },
      { question: 'fridge', imagePath: '../assets/fridge.jpg' },
      { question: 'orange', imagePath: '../assets/orange.jpg' },

      
    ];


  /** emits isAllAnswered is after all the drag and drops is completed */
  @Output() isAllAnswered = new EventEmitter<boolean>();


  questions: any[] = [];  //current Set of questions  
  answers: any[] = [];
  ids: string[] = [];
  currentDraggableItem: { question: string, imagePath: string } = null;
  draggedCounter: number = 0;
  hideNextButton: boolean = true;
  randomId: number = 0;
  randomQuestion: string = 'z';

  ngOnInit(): void {

    console.log('ACtive route: ', this.route);
    this.setCurrentDraggableItem();
  }

  private setCurrentDraggableItem() {

    this.questions = [];
    this.answers = [];
    this.ids = [];
    this.currentDraggableItem = this.draggableItems.shift();

    for (let i = 0; i < this.currentDraggableItem.question.length; i++) {

      let slicedQuestion = this.currentDraggableItem.question.split('').slice(i, i + 1);
      this.questions.push(slicedQuestion);
      this.answers.push([]);
      this.ids.push(slicedQuestion[0] + i); // make the id unique
    }
    this.draggedCounter++;
    this.randomId = this.getRandomIntInclusive(0, this.currentDraggableItem.question.length - 1);
    this.randomQuestion = this.getRandomQuestion(this.currentDraggableItem.question);



  }
  getRandomQuestion(question: string): string {
    let randChar = '';
    do {
      randChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    } while (question.includes(randChar));
    return randChar;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.logger.log(event);
    this.logger.log({ eventlog: event.previousContainer.data[0] });
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.updateNextButton(); //an observable will change this in the future

    this.emitIsAllAnsweredEvent();

  }

  emitIsAllAnsweredEvent() {
    if (this.draggableItems.length === 0 && this.questions.every(item => {
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

    if (this.draggableItems.length === 0 && this.questions.every(item => {
      return item.length === 0;
    })) {
      this.hideNextButton = true;
      return;
    }

    if (this.questions.some(item => {
      return item.length === 1;
    })) {
      this.hideNextButton = true;
      return;
    }

    if (this.draggableItems.length === 0) {
      this.hideNextButton = true;
    }

    this.hideNextButton = false;
  }

  nextDraggableItem() {
    this.hideNextButton = true;
    this.setCurrentDraggableItem();
  }

  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

}
