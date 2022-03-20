import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTotalComponent } from './market-total.component';

describe('MarketTotalComponent', () => {
  let component: MarketTotalComponent;
  let fixture: ComponentFixture<MarketTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
