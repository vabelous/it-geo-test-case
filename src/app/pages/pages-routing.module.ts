import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error403Component } from './error-403';
import { Error404Component } from './error-404';

@NgModule({
  imports: [
	RouterModule.forChild([
		{
			path: 'error-403',
			component: Error403Component,
		},
		{
			path: 'error-404',
			component: Error404Component,
		},
	]),
	],
	exports: [
		RouterModule,
	],
})

export class PagesRoutingModule { }
