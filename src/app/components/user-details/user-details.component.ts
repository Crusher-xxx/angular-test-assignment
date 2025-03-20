import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-details',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  @Input() id!: number;
  private httpService = inject(HttpService);

  form = new FormGroup({
    first_name: new FormControl<string>('', { nonNullable: true }),
    last_name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true }),
    avatar: new FormControl<string>('', { nonNullable: true }),
  });

  ngOnInit(): void {
    this.httpService.getUser(this.id).subscribe((response) => {
      const { id, ...formData } = response.data;
      this.form.setValue(formData);
    });
  }

  onSubmit() {
    this.httpService.updateUser(this.id, this.form.value);
  }
}
