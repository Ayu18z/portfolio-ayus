import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFoldComponent } from './subscription-fold.component';

describe('SubscriptionFoldComponent', () => {
  let component: SubscriptionFoldComponent;
  let fixture: ComponentFixture<SubscriptionFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionFoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
