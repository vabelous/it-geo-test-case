import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	imports: [
		MatCardModule,
		MatIconModule,
		MatDividerModule,
		MatInputModule,
		MatFormFieldModule,
		MatTooltipModule,
	],
	exports: [
		MatCardModule,
		MatIconModule,
		MatDividerModule,
		MatInputModule,
		MatFormFieldModule,
		MatTooltipModule,
	],
})
export class DynamicFormMaterialModule { }
