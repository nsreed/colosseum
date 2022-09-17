import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {
  @Input()
  block: any;

  constructor() { }

  ngOnInit(): void {
  }

}
