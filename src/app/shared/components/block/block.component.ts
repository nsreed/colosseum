import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('10ms')
      ]),
      transition('closed => open', [
        animate('10ms')
      ]),
    ])
  ]
})
export class BlockComponent implements OnInit {
  @Input()
  block: any;

  isConnecting = false;

  constructor(private changes: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isConnecting = !this.isConnecting;
    this.changes.detectChanges();
  }
  onAnimationEvent(event: any) {
    console.log(event);
  }

}
