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

  it('should alert "Thank you for your response" on form submit', () => {
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Thank you for your response');
  });
});
