import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockScreenshotComponent } from './block-screenshot.component';

describe('BlockScreenshotComponent', () => {
  let component: BlockScreenshotComponent;
  let fixture: ComponentFixture<BlockScreenshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockScreenshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
