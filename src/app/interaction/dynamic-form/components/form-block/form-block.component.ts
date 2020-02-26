import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControlService } from '@it-geo-services/form-control';

@Component({
  selector: 'it-geo-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit {
  
  @Input() block;
  @Input() dynamicForm;
  constructor(
    private formControlService: FormControlService
  ) { }

  ngOnInit(): void {
    // this.dynamicForm = {
    //   ... this.dynamicForm,
    //   [this.block.key] : this.formControlService.getFormControlsList(this.block.fields)
    // }
    // this.dynamicForm = {
    //   ... this.dynamicForm,
    //   [this.block.key] : this.formControlService.getFormControlsList(this.block.fields)
    // };
    this.dynamicForm.addControl(this.block.key, this.formControlService.getFormControlsList(this.block.fields))
    
    
    console.log(this.dynamicForm);
  }

}
