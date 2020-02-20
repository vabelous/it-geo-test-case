import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const config: ExtraOptions = {
	useHash: false,
	enableTracing: false,
	scrollPositionRestoration: 'enabled'
};

export const routes: Routes = [
	// {
	// 	path: 'it-geo',
	// 	children: [
	// 			{
	// 				path: '',
	// 				redirectTo: 'layouts',
	// 				pathMatch: 'full'
	// 			},
	// 			{
	// 				path: 'layouts',
	// 				loadChildren: () => import('./layouts/layouts.module').then(loaded => loaded.LayoutsModule)
	// 			}
	// 		]
	// },
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
	},
	// {
	// 	path: '',
	// 	redirectTo: 'it-geo/layouts',
	// 	pathMatch: 'full'
	// },
	{
		path: '**',
		redirectTo: 'pages/error-404'
	}
];


@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes, config)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
