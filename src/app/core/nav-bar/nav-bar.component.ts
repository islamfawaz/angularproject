import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { FoodRecommendationService } from 'src/app/services/FoodRecommendationService ';
import { IBasket } from 'src/app/shared/models/basket';
import { IRecommendation } from 'src/app/shared/models/IRecommendation ';
import { IUser } from 'src/app/shared/models/user';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  recommendations: IRecommendation[] = []; // Store recommendations

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private foodRecommendationService: FoodRecommendationService // Inject the service
  ) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;

    // Fetch recommendations for logged-in user
    this.currentUser$.subscribe(user => {
      if (user) {
        this.foodRecommendationService.getRecommendations(2).subscribe(
          (data) => {
            this.recommendations = data; // Assign recommendations to the variable
          }
        );
      }
    });
  }

  logout() {
    this.accountService.logout();
  }
}
