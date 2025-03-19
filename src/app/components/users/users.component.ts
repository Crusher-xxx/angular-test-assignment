import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-users',
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  items = [];
  total = 0;
  pageSize = 0;
  pageIndex = 0;

  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'last_name',
    'email',
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.httpService
      .getUsers(this.pageIndex + 1)
      .subscribe((response: any) => {
        this.items = response.data;
        this.total = response.total;
        this.pageSize = response.per_page;
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.total = event.length;
    console.log(event);
    this.getUsers();
  }
}
