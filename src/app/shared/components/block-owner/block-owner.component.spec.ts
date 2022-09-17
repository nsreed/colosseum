import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOwnerComponent } from './block-owner.component';

describe('BlockOwnerComponent', () => {
  let component: BlockOwnerComponent;
  let fixture: ComponentFixture<BlockOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
