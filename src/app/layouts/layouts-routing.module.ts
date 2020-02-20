import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: LayoutsComponent,
				// loadChildren: () => import('./interaction/interaction.module').then(mod => mod.InteractionModule),
			},
		]),
	],
	exports: [
		RouterModule,
	],
})

export class LayoutsRoutingModule { }
