import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'] 
})
export class TodoItemComponent {
  @Input() todoTitle = ''
  @Input() isDarkMode = true
  @Input() isTodoDone = false
  @Input() todoId = ''

  @Output() idEvent = new EventEmitter<string>()
  @Output() crossId = new EventEmitter<string>()

  onTodoClick() {
    this.idEvent.emit(this.todoId)
  }

  onCrossClick() {
    this.crossId.emit(this.todoId)
  }
}
