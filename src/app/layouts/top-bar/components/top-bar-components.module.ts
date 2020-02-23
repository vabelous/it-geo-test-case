import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguagesSelectorComponent } from './languages-selector';
import { TopBarMaterialModule } from './top-bar-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TopBarMaterialModule,
		FlexLayoutModule
	],
	declarations: [
		LanguagesSelectorComponent,
	],
	exports: [
		LanguagesSelectorComponent,
	],
})
export class TopBarComponentsModule { }
