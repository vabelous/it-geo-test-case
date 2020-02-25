import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'it-geo-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

}
