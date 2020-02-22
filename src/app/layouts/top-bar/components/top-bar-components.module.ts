import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguagesSelectorComponent } from './languages-selector';



@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [
		LanguagesSelectorComponent,
	],
	exports: [
		LanguagesSelectorComponent,
	],
})
export class TopBarComponentsModule { }
