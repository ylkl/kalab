import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive ({
    selector: '[appDropdown]'   //[] used since it is attribute 
}
    
)
export class DropdownDirective {
    
    @HostBinding('class.open') isOpen = false;
      
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}