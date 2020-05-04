import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {


  balls: number[] = [];
  className: string[] = ['db', 'dot', 'btn-primary'];
  color: string = '';
  multipleInput: string = '';
  score: number = 0;

  //takes rewardScore as an input and emits success when reward score is reached
  @Output() success = new EventEmitter<boolean>();
  @Input() rewardScore: { point: number }; 

  constructor() {
    this.balls.push(0);
  }

  ngOnInit(): void {
    console.log('the rewared score received is ', this.rewardScore);
  }
  

  addBalls() {
    if (this.balls.length < this.rewardScore.point) {
      this.balls.push(this.balls.length + 1);
    }
    this.incrementScore();
  }

  subtractBalls() {
    this.balls.pop();
  }

  incrementScore() {
    this.score = this.score + 1;
    if (this.score >= this.rewardScore.point) {
      this.success.emit();
    }
  }

  getClassName() {
    return this.className;
  }

  changeColor(event: Event) {
    let clr = (<HTMLInputElement>event.target).innerText;
    this.className.pop();
    this.className.push(clr.toLowerCase());
    this.incrementScore();
  }

  changeColorWithInput(event: Event) {
    let clr = (<HTMLInputElement>event.target).value.toLowerCase();
    switch (clr) {

      case 'black': {
        this.pushNewColor('black');
        break;
      }
      case 'red': {
        this.pushNewColor('red');
        break;
      }
      case 'blue': {
        this.pushNewColor('blue');
        break;
      }
      case 'orange': {
        this.pushNewColor('orange');
        break;
      }
      case 'yellow': {
        this.pushNewColor('yellow');
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * remove the current color and push new color for classes array, 
   * also removes the user input (color) from the input box after 20 seconds
   * @param newColor 
   */
  private pushNewColor(newColor: string) {
    this.className.pop();
    this.className.push(newColor);
    setTimeout(() => {
      this.color = '';
    }, 10000);
  }

  addMultiple(event: Event) {
    let number = (<HTMLInputElement>event.target).value;
    this.balls = [];
    for (let i = 0; i < +number; i++) {
      this.balls.push(this.balls.length + 1);
    }

  }

  clear() {
    this.balls = [];
    this.multipleInput = '';

  }

}

