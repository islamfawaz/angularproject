import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodUserService } from '../services/food-user.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
 })
export class FoodItemComponent implements OnInit {
  foodId: number;
  foodItem: any;
  rating: number;

  constructor(
    private route: ActivatedRoute,
    private foodUserService: FoodUserService
  ) { }

  ngOnInit(): void {
    this.foodId = +this.route.snapshot.paramMap.get('foodId');
    this.getFoodItem();
  }

  // Fetch food item by its ID
  getFoodItem(): void {
    this.foodUserService.getFoodItemById(this.foodId).subscribe(response => {
      this.foodItem = response.FoodItem;
    });
  }

  // Add a rating to the food item
  addRating(): void {
    const ratingData = { foodId: this.foodId, rating: this.rating };
    this.foodUserService.addRating(ratingData).subscribe(response => {
      alert('Rating added successfully!');
    });
  }
}
