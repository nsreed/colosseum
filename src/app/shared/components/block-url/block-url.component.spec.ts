import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUrlComponent } from './block-url.component';

describe('BlockUrlComponent', () => {
  let component: BlockUrlComponent;
  let fixture: ComponentFixture<BlockUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
