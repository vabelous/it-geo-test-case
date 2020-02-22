import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DictionariesResolver } from './router';

const config: ExtraOptions = {
	useHash: false,
	enableTracing: false,
	scrollPositionRestoration: 'enabled'
};

export const routes: Routes = [
	{
		path: 'it-geo',
		resolve: {
			dictionaries: DictionariesResolver,
		},
		loadChildren: () => import('./layouts/layouts.module').then(mod => mod.LayoutsModule)
	},	
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
	},

	{
		path: '',
		redirectTo: 'it-geo',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'pages/error-404'
	}
];


@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes, config)],
	exports: [RouterModule],
	providers: [DictionariesResolver]
})
export class AppRoutingModule { }
