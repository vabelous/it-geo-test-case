import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControlService } from '@it-geo-services/form-control';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'it-geo-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit {
  
  @Input() block;
  @Input() dynamicForm;
  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    
  ) { }

  ngOnInit(): void {
    // this.dynamicForm.add
    // this.dynamicForm.addControl([this.block.key], this.fb.control(this.formControlService.getFormControlsList(this.block.fields)));
    // console.log("form: ", this.dynamicForm);
  }

}
