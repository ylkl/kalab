import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
 // appUnless is a property. whenever this property changes the set method is run. That is how the following code is understood. weird!
  @Input() set appUnless (condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {

      this.vcRef.clear();

    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
