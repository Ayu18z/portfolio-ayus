import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorArtComponent } from './vector-art.component';

describe('VectorArtComponent', () => {
  let component: VectorArtComponent;
  let fixture: ComponentFixture<VectorArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
