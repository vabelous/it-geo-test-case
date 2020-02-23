import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'it-geo-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit {
  
  @Input() block;

  constructor() { }

  ngOnInit(): void {
  }

}
