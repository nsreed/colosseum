import { Component, Input, OnInit } from '@angular/core';
import { IChannel } from '../../../models/arena';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input()
  public channel: IChannel;

  constructor() { }

  ngOnInit(): void {
  }

}
