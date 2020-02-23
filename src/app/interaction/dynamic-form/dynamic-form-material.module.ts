import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	imports: [
		MatCardModule,
		MatIconModule,
		MatDividerModule,
	],
	exports: [
		MatCardModule,
		MatIconModule,
		MatDividerModule,
	],
})
export class DynamicFormMaterialModule { }
