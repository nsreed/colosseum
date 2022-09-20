import { animate, state, style, transition, trigger } from '@angular/animations';

import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { BlockService } from '../../services/block.service';
import { IGunChain } from 'gun';
import { IChannel } from 'src/app/models/arena';
import { GunService } from '../../services/gun.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private _block: any;
  public get block(): any {
    return this._block;
  }
  @Input()
  public set block(value: any) {
    if (!value) {
      return;
    }
    if (!value._ || !value._['#']) {
      throw new Error('no soul, no block');
    }
    this._block = value;
  }

  private _isConnecting = false;
  public get isConnecting() {
    return this._isConnecting;
  }
  public set isConnecting(value) {
    this._isConnecting = value;
    this.changes.detectChanges();
  }

  constructor(
    private changes: ChangeDetectorRef,
    private channels: ChannelService,
    private blockFactory: BlockService,
    protected gunService: GunService
  ) { }

  ngOnInit(): void {
    if (!this.block._) {
      console.log('this block was a fake', this.block)
    }
  }

  toggle() {
    this.isConnecting = !this.isConnecting;
    this.changes.detectChanges();
  }
  onAnimationEvent(event: any) {
    console.log(event);
  }

  onConnected(channelOrTitle: any) {
    if ('string' === typeof channelOrTitle) {
      console.log(`gonna try making a new block? or something?`, channelOrTitle);
      let nb = this.blockFactory.createBlock();
      nb = {
        ...nb,
        title: channelOrTitle
      };

      const blockNode = this.channels.channels.set(nb);
      blockNode.get('blocks').set(this.block);
      this.isConnecting = false;
      return;
    }
    // Otherwise it's an existing channel.
    const theirSoul = channelOrTitle._['#'] as string;
    console.log('their soul is ', theirSoul);

    const ourSoul = this.block._['#'] as string;
    console.log('our soul is', ourSoul);
    return;

    const theChannel = this.channels.channels.get(theirSoul) as IGunChain<IChannel>;
    theChannel.get('blocks').set(this.block);
    return;

    // const nb = {title
    //   ...this.blockFactory.createBlock()}
    // this.channels.channels.set()
  }
}
