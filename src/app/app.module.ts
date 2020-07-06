import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { Routes, RouterModule } from '@angular/router';


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
import { DropdownDirective } from './shared/dropdown.directive';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LoggingService } from './logging.service';

const appRoutes: Routes =[{path: 'shopinglist', component: ShoppingListComponent}];

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
    CountingComponent,
    DropdownDirective,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
