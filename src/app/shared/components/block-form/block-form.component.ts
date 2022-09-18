import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-block-form',
  templateUrl: './block-form.component.html',
  styleUrls: ['./block-form.component.scss']
})
export class BlockFormComponent implements OnInit {
  blockForm = this.fb.group({
    title: 'new block',
    description: null,
  })

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
}
