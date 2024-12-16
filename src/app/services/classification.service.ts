import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  private apiUrl = `${environment.apiUrl}/api/classification`;

  constructor(private http: HttpClient) { }

  // Classify food data from CSV
  classifyData(): Observable<any> {
    return this.http.post(`${this.apiUrl}/classify`, null);
  }

  // Get food recommendations for a user
  getRecommendations(userId: number, count: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/recommend/${userId}`, { params: { count: count.toString() } });
  }

  // Import classified foods from CSV
  importClassifiedFoods(): Observable<any> {
    return this.http.post(`${this.apiUrl}/import-classified-foods`, null);
  }
}
