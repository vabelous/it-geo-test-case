import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormMaterialModule } from './dynamic-form-material.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormBlockComponent } from './components/form-block/form-block.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		TextMaskModule,
		DynamicFormRoutingModule,
		DynamicFormMaterialModule,
	],
	declarations: [
		DynamicFormComponent,
		FormBlockComponent,
	],
	exports: [
		DynamicFormComponent
	]
})
export class DynamicFormModule {}
