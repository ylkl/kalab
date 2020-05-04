import { Directive,
        ElementRef,
        OnInit
     } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    // adding private below makes it a property of the class - can be used everywhere in the class
    constructor(private elementRef: ElementRef) {


    }
    ngOnInit(): void {

        this.elementRef.nativeElement.style.backgroudColor = 'green';
    }
}