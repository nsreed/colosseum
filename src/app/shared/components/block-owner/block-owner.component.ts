import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { IBlock } from '../../../models/arena';
import { IGunChain } from 'gun';

@Component({
  selector: 'app-block-owner',
  templateUrl: './block-owner.component.html',
  styleUrls: ['./block-owner.component.scss']
})
export class BlockOwnerComponent extends BlockComponent {
}
