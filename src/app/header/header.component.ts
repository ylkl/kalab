import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() feature = new EventEmitter<String>();

  ngOnInit(): void {
  }

  onSelect(feature : string) {
    console.log('feature: ', feature);
    this.feature.emit(feature);
  }

}
