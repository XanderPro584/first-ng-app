import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  template: `
    <p>
      todos works
    </p>
  `,
  styles: ``
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
  }
}
