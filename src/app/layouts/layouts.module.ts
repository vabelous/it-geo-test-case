import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { I18nModule } from '@it-geo-modules/i18n.module';




@NgModule({
	imports: [
		I18nModule,
		FlexLayoutModule,
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [
		LayoutsComponent
	],
	exports: [
		LayoutsComponent,
	],
})
export class LayoutsModule { }
