import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUTASLAZYLOADComponent } from './rutaslazyload.component';

describe('RUTASLAZYLOADComponent', () => {
  let component: RUTASLAZYLOADComponent;
  let fixture: ComponentFixture<RUTASLAZYLOADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUTASLAZYLOADComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RUTASLAZYLOADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
