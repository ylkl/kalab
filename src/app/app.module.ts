import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonListComponent } from './lessons/lesson-list/lesson-list.component';
import { LessonDetailComponent } from './lessons/lesson-detail/lesson-detail.component';
import { LessonItemComponent } from './lessons/lesson-list/lesson-item/lesson-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AdditionComponent } from './addition/addition.component';
import { CountingComponent } from './lessons/counting/counting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonsComponent,
    LessonListComponent,
    LessonDetailComponent,
    LessonItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AdditionComponent,
    CountingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
