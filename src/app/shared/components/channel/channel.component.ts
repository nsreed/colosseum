import { Component, Input, OnInit } from '@angular/core';
import { IChannel } from '../../../models/arena';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  private _channel: IChannel;
  public get channel(): IChannel {
    return this._channel;
  }
  @Input()
  public set channel(value: IChannel) {
    this._channel = value;
    if (!value._) {
      console.log(value, 'is a hoax');

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
