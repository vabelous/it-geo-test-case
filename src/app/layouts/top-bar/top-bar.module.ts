import { NgModule } from '@angular/core';
import { TopBarComponentsModule } from './components/top-bar-components.module';
import { TopBarComponent } from './top-bar.component';
import { TopBarMaterialModule } from './components/top-bar-material.module';

@NgModule({
	imports: [
		TopBarComponentsModule,
		TopBarMaterialModule
	],
	declarations: [
		TopBarComponent,
	],
	exports: [
		TopBarComponent
	],
})
export class TopBarModule { }
