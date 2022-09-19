import { Component, Input, OnInit } from '@angular/core';
import { IBlock } from '../../../models/arena';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {
  @Input()
  block: IBlock;

  constructor() { }

  ngOnInit(): void {
  }

}
