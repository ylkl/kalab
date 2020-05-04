import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kalab-iep';
  feature : string  = 'lessons';

  onFeatureSelect(feature :string ) {
    console.log('this event was listened: ', feature);
    this.feature = feature;
  }

}
