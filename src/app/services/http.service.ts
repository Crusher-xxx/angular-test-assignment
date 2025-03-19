import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(page: number) {
    var url = `${this.apiUrl}/users?page=${page}`;
    return this.http.get(url);
  }
}
