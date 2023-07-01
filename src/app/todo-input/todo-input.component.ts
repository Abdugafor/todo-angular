import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent {
  @Input() isDarkMode = false
  @Output() inputEvent = new EventEmitter<string>()

  inputValue = ''

  addTodo(value: string) {
    this.inputEvent.emit(value)
    this.inputValue = ''
  }
}
