import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
})
export class CategoryProductsComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  products$: Observable<Product[]> = this.route.paramMap.pipe(
    switchMap((params) => {
      const slug = params.get('slug');
      return this.http.get<Product[]>(`/api/store/products/?category=${slug}`);
    })
  );
}
