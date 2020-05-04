import { Directive,
   Renderer2,
    OnInit,
     ElementRef,
      HostListener,
      HostBinding
     } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover (eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave (eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }


}
