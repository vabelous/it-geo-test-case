import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutsRoutingModule } from './layouts-routing.module';



@NgModule({
	imports: [
		FlexLayoutModule,
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		LayoutsRoutingModule,
	],
	declarations: [
		LayoutsComponent
	],
	exports: [
		LayoutsComponent,
	],
})
export class LayoutsModule { }
