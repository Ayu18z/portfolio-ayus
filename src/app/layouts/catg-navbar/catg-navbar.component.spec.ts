import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgNavbarComponent } from './catg-navbar.component';

describe('CatgNavbarComponent', () => {
  let component: CatgNavbarComponent;
  let fixture: ComponentFixture<CatgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
