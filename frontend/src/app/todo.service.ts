import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  deleted_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Todo一覧を取得する。
  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  // Todoを作成する。
  create(title: string): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, {
      todo: { title }
    });
  }

  // Todoを削除する。
  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  // 最近削除したTodoを取得する。
  listDeleted(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos/deleted`);
  }
}
