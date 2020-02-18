import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'it-geo',
		children: [
				{
					path: '',
					redirectTo: 'layouts',
					pathMatch: 'full'
				},
				{
					path: 'layouts',
					loadChildren: () => import('../layouts/layouts.module').then(loaded => loaded.LayoutsModule)
				}
		]
		},
		{
			path: 'pages',
			loadChildren: () => import('../pages/pages.module').then(loaded => loaded.PagesModule)
	  },
		{
			path: '',
			redirectTo: 'it-geo/layouts',
			pathMatch: 'full'
		},
		{
			path: '**',
			redirectTo: 'pages/error-404'
		}
];


@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
