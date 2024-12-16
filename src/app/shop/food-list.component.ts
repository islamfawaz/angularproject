import { Component, OnInit } from '@angular/core';
import { FoodUserService } from '../services/food-user.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
 })
export class FoodListComponent implements OnInit {
  foodItems: any[] = [];
  pageIndex = 1;
  pageSize = 10;
  sort = '';
  search = '';

  constructor(private foodUserService: FoodUserService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  // Fetch distinct food items with pagination, sorting, and search
  getFoodItems(): void {
    this.foodUserService.getDistinctFoodItems(this.pageIndex, this.pageSize, this.sort, this.search).subscribe(response => {
      this.foodItems = response.FoodItems;
    });
  }

  // Trigger search update
  onSearchChange(searchValue: string): void {
    this.search = searchValue;
    this.getFoodItems();
  }

  // Trigger sort update
  onSortChange(sortValue: string): void {
    this.sort = sortValue;
    this.getFoodItems();
  }

  // Trigger page change
  onPageChange(page: number): void {
    this.pageIndex = page;
    this.getFoodItems();
  }
}
