import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'https://reqres.in/api';

  private httpClient = inject(HttpClient);

  getUsers(page: number) {
    var url = `${this.apiUrl}/users?page=${page}`;
    return this.httpClient.get<UserList>(url);
  }

  getUser(id: number) {
    var url = `${this.apiUrl}/users/${id}`;
    return this.httpClient.get<UserResponse>(url);
  }

  updateUser(id: number, body: Partial<User>) {
    var url = `${this.apiUrl}/users/${id}`;
    return this.httpClient.put(url, body);
  }

  deleteUser(id: number) {
    var url = `${this.apiUrl}/users/${id}`;
    return this.httpClient.delete(url);
  }
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Support {
  url: string;
  text: string;
}

interface UserResponse {
  data: User;
  support: Support;
}

interface UserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}
