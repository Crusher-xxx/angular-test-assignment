import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HttpService, User } from '../../services/http.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-users',
  imports: [MatPaginatorModule, MatTableModule, RouterModule, MatIcon],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  total = 0;
  pageSize = 0;
  pageIndex = 0;

  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'last_name',
    'email',
    'actions',
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.httpService
      .getUsers(this.pageIndex + 1)
      .subscribe((response) => {
        this.users = response.data;
        this.total = response.total;
        this.pageSize = response.per_page;
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.total = event.length;
    this.getUsers();
  }

  deleteUser(id: number) {
    this.httpService.deleteUser(id);
  }
}
