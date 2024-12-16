import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../services/classification.service';

@Component({
  selector: 'app-classification',
  templateUrl: '/src/app/shop/classification.component.html',
})
export class ClassificationComponent implements OnInit {
  recommendations: any[] = [];
  userId: number = 1; // Example user ID
  count: number = 1;

  constructor(private classificationService: ClassificationService) { }

  ngOnInit(): void {
    this.getRecommendations();
  }

  // Fetch food recommendations for the user
  getRecommendations(): void {
    this.classificationService.getRecommendations(this.userId, this.count).subscribe(response => {
      this.recommendations = response.Recommendations;
    });
  }

  // Start food classification process
  classifyData(): void {
    this.classificationService.classifyData().subscribe(response => {
      alert('Classification completed.');
    });
  }

  // Import classified foods
  importClassifiedFoods(): void {
    this.classificationService.importClassifiedFoods().subscribe(response => {
      alert('Classified foods imported successfully.');
    });
  }
}
