import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FiltersComponent } from './filters/filters.component';
import { TodoItemComponent } from './todos-list/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodosListComponent,
    FiltersComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
