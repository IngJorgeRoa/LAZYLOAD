import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantereserComponent } from './restaurantereser.component';

describe('RestaurantereserComponent', () => {
  let component: RestaurantereserComponent;
  let fixture: ComponentFixture<RestaurantereserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantereserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantereserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
