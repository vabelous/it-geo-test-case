import { NgModule } from '@angular/core';
import { TopBarComponentsModule } from './components/top-bar-components.module';
import { TopBarComponent } from './top-bar.component';

@NgModule({
	imports: [
		TopBarComponentsModule
	],
	declarations: [
		TopBarComponent,
	],
	exports: [
		TopBarComponent
	],
})
export class TopBarModule { }
