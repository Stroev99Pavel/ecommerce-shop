import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

interface Category {
  id: number;
  name: string;
  slug: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  private http = inject(HttpClient);
  categories$: Observable<Category[]> = this.http.get<Category[]>('/api/store/categories/');
}
