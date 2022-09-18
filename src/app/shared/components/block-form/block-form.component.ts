import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
