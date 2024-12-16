import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodUserService {
  private apiUrl = `${environment.apiUrl}/api/fooduser`;

  constructor(private http: HttpClient) { }

  // Add rating to a food item
  addRating(rating: { foodId: number, rating: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-rating`, rating);
  }

  // Add food item from CSV
  addFoodItemFromCsv(foodId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-food-item/${foodId}`, null);
  }

  // Get food item by ID
  getFoodItemById(foodId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-food-item/${foodId}`);
  }

  // Import all food items from CSV
  importFoodItems(): Observable<any> {
    return this.http.post(`${this.apiUrl}/import-food-items`, null);
  }

  // Get distinct food items with pagination and filters
  getDistinctFoodItems(pageIndex: number = 1, pageSize: number = 10, sort: string = '', search: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
      .set('sort', sort)
      .set('search', search);
    return this.http.get(`${this.apiUrl}/get-distinct-food-items`, { params });
  }
}
