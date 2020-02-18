import { NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@it-geo-factories/http-loader.factory';

@Injectable()
@NgModule({
	imports: [
		HttpClientModule,
		CommonModule,
		TranslateModule.forRoot({
			loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient],
			},
			isolate: false
		})
	],
	exports: [
		CommonModule,
		TranslateModule
	],
	providers: [ I18nModule ]
})



export class I18nModule {

	constructor(private translate: TranslateService) {

	translate.addLangs(['ru']);
	translate.setDefaultLang('ru');
	const browserLang = translate.getBrowserLang();
	translate.use(browserLang.match(/ru|en|fr/) ? browserLang : 'ru');
	}
}
