import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { IChannel } from '../../../models/arena';
import { GunService } from '../../services/gun.service';
import { ChannelService } from '../../services/channel.service';
import { Subscription, take } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-channel-search',
  templateUrl: './channel-search.component.html',
  styleUrls: ['./channel-search.component.scss']
})
export class ChannelSearchComponent implements OnInit {
  recent: Record<string, IChannel> = {};

  searchControl = this.fb.control('');

  constructor(private channelService: ChannelService, private el: ElementRef, private fb: FormBuilder) { }


  @HostListener('blur', ['$event'])
  onHostBlur(event?: any) {
    // console.info('get got blur');
  }

  @Output()
  blur = new EventEmitter();

  @Output()
  change = new EventEmitter();


  @ViewChild('SearchInput')
  searchInput: ElementRef<HTMLInputElement>;

  recentResults: IChannel[] = [];


  onSelectExisting(channel: IChannel) {
    this.change.emit(channel);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.searchInput?.nativeElement) {
      this.searchInput.nativeElement.focus();
      this.searchInput.nativeElement.onchange = (ev) => {
        // console.info('native change');
        this.change.emit(this.searchControl.value);
      }
      this.searchInput.nativeElement.onblur = () => {
        // console.info('HOLY BOLLOCKS WE BLUR'); // TODO what now?
        this.recentSub?.unsubscribe();
        this.blur.emit();
      }
    }
  }

  recentSub: Subscription;


  ngOnInit(): void {
    this.recent = this.channelService.recent;

    this.searchControl.valueChanges.subscribe(v => {
      // console.log('value change', v);
    })
  }
}
