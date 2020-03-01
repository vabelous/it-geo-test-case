import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormMaterialModule } from './dynamic-form-material.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		TextMaskModule,
		DynamicFormRoutingModule,
		DynamicFormMaterialModule,
		FlexLayoutModule,
	],
	declarations: [
		DynamicFormComponent
	],
	exports: [
		DynamicFormComponent
	]
})
export class DynamicFormModule {}
