import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { ForbiddenComponent } from './forbidden';
import { NotFoundComponent } from './not-found';

@NgModule({
  imports: [
	RouterModule.forChild([
		{
			path: 'login',
			component: LoginComponent,
		},
		{
			path: 'forbidden',
			component: ForbiddenComponent,
		},
		{
			path: 'error-404',
			component: NotFoundComponent,
		},
	]),
	],
	exports: [
		RouterModule,
	],
})

export class PagesRoutingModule { }
