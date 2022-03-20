import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTypeTotalComponent } from './trade-type-total.component';

describe('TradeTypeTotalComponent', () => {
  let component: TradeTypeTotalComponent;
  let fixture: ComponentFixture<TradeTypeTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeTypeTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTypeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
