import { TestBed } from '@angular/core/testing';

import { FoodUserService } from './food-user.service';

describe('FoodUserService', () => {
  let service: FoodUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
