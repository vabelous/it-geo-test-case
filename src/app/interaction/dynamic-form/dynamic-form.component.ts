import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { DynamicFormService } from '@it-geo-services/dynamic-form';
import { tap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  public dynamicFormSub$: Subscription;
  public dynamicForm$: Subject<DynamicFormDTO>;
  public dynamicForm: FormGroup;
  constructor(
    private dynamicFormService: DynamicFormService,
  ) { 
    this.dynamicForm$ = new Subject<DynamicFormDTO>();
  }

  ngOnInit(): void {
    this.dynamicFormSub$ = this.dynamicFormService.getDynamicForm()
      .pipe(
        tap(response => this.dynamicForm$.next(response))
      )
      .subscribe();
    this.dynamicForm = new FormGroup({});
  }

  ngOnDestroy() {
		if (this.dynamicFormSub$) {
			this.dynamicFormSub$.unsubscribe();
    }
  }

  onSubmit() {
    console.log('submit');
  }
}
