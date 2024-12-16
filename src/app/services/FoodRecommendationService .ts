// food-recommendation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecommendation } from '../shared/models/IRecommendation ';

@Injectable({
  providedIn: 'root'
})
export class FoodRecommendationService {

  constructor(private http: HttpClient) { }

  getRecommendations(userId: number): Observable<IRecommendation[]> {
    return this.http.get<IRecommendation[]>(`/api/food/recommend/${userId}`);
  }
}
