import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesMaterialModule } from './pages-material.module';
import { I18nModule } from '@it-geo-modules/i18n.module';
import { Error403Component } from './error-403';
import { Error404Component } from './error-404';
import { PagesRoutingModule } from './pages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [
		Error403Component,
		Error404Component,
	],
	imports: [
		I18nModule,
		ReactiveFormsModule,
		PagesMaterialModule,
		PagesRoutingModule,
		FlexLayoutModule,
	],
	exports: [
		Error403Component,
		Error404Component,
	],
	providers: [],
})
export class PagesModule { }
