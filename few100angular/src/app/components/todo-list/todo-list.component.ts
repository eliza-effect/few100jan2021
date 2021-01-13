import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: TodoItem[] = [
    { description: 'Buy Kale', complete: false },
    { description: 'Medicate cat', complete: true }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement): void {
    this.items = [...this.items, { description: what.value, complete: false }];
    // jeff says don't do the below because it slows down Angular by mutating the list
    //  this.items.push({ description: what.value, complete: false });
    what.value = '';
    what.focus();
  }

  markComplete(item: TodoItem): void {
    item.complete = true;
  }

  clearCompleteItems(): void {
    this.items = this.items.filter(item => item.complete === false);
  }

  get hasCompletedItems(): boolean {
    return this.items.filter(i => i.complete).length > 0;
  }

}
