import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTitle = '';
  isLoading = false;
  errorMessage = '';

  constructor(private todoService: TodoService) {}

  // 起動時に一覧を読み込む。
  ngOnInit(): void {
    this.loadTodos();
  }

  // 最新の一覧を取得する。
  loadTodos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.todoService.list().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: () => {
        this.errorMessage = '読み込みに失敗しました。APIの設定を確認してください。';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  // 入力からTodoを作成する。
  addTodo(): void {
    const title = this.newTitle.trim();
    if (!title) {
      return;
    }

    this.errorMessage = '';
    this.todoService.create(title).subscribe({
      next: (todo) => {
        this.todos = [todo, ...this.todos];
        this.newTitle = '';
      },
      error: () => {
        this.errorMessage = '作成に失敗しました。';
      }
    });
  }

  // Todoを削除する。
  deleteTodo(todo: Todo): void {
    this.errorMessage = '';
    this.todoService.delete(todo.id).subscribe({
      next: () => {
        this.todos = this.todos.filter((item) => item.id !== todo.id);
      },
      error: () => {
        this.errorMessage = '削除に失敗しました。';
      }
    });
  }
}
