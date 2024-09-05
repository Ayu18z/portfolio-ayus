import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebelementComponent } from './webelement.component';

describe('WebelementComponent', () => {
  let component: WebelementComponent;
  let fixture: ComponentFixture<WebelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
