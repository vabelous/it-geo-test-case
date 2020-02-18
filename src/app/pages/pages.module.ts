import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesMaterialModule } from './pages-material.module';
import { I18nModule } from '@it-geo-modules/i18n.module';
import { ForbiddenComponent } from './forbidden';
import { NotFoundComponent } from './not-found';
import { PagesRoutingModule } from './pages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [
		ForbiddenComponent,
		NotFoundComponent,
	],
	imports: [
		I18nModule,
		ReactiveFormsModule,
		PagesMaterialModule,
		PagesRoutingModule,
		FlexLayoutModule,
	],
	exports: [
		ForbiddenComponent,
		NotFoundComponent,
	],
	providers: [],
})
export class PagesModule { }
