import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@tutorials/data';

@Component({
  selector: 'tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  public fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(todo => this.todos = todo);
  }

  public addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
