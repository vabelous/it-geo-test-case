import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: LayoutsComponent,
				children: [
					{
						path: 'interaction',
						children: [
							{
								path: 'dynamic-form',
								loadChildren: () => import('app/interaction/dynamic-form/dynamic-form.module').then(mod => mod.DynamicFormModule)
							}
						]
					}
				],
			}
		]),
	],
	exports: [
		RouterModule,
	],
})

export class LayoutsRoutingModule { }
