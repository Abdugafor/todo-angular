import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode = true
  
  todosList = [
    {title: 'Go for a walk', done: false },
    {title:  'Wash the dishes', done: false },
    {title: 'Programming assignment', done: false }, 
  ].map((todo) => ({...todo, id: this.appService.generateRandomId()}))

  constructor (private appService: AppService) {}

  onChangeMode() {
    console.log('changed')
    if (this.isDarkMode) {
      this.isDarkMode = !this.isDarkMode
    }else {
     this.isDarkMode = true
    }
  }

  addTodo(value: string) {
    if(value !== '') {
      this.todosList.push({title: value, done: false, id: this.appService.generateRandomId()})
    }
  }

  changeTodoDone(todoId: string) {
    this.todosList.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done
      }
    })
  }

  clearDoneTodos() {
    this.todosList = this.todosList.filter(item => !item.done)
  }

  calcItemsLeft() {
    return this.todosList.filter(item => !item.done).length
  }

  onCrossDelete(todoid) {
    this.todosList = this.todosList.filter(item => item.id !== todoid)
  }
}

