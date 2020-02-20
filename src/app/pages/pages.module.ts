import { NgModule } from '@angular/core';
import { PagesMaterialModule } from './pages-material.module';
import { Error403Component } from './error-403';
import { Error404Component } from './error-404';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/pages/', '.json');
}

@NgModule({
	declarations: [
		Error403Component,
		Error404Component,
	],
	imports: [
		PagesMaterialModule,
		PagesRoutingModule,
		TranslateModule.forChild({
			loader: {
			  provide: TranslateLoader,
			  useFactory: createTranslateLoader,
			  deps: [HttpClient]
			},
			isolate: true
		})
	],
	exports: [
		Error403Component,
		Error404Component,
	],
	providers: [],
})
export class PagesModule { }
