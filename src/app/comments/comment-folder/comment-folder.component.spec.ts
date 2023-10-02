import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFolderComponent } from './comment-folder.component';

describe('CommentFolderComponent', () => {
  let component: CommentFolderComponent;
  let fixture: ComponentFixture<CommentFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
