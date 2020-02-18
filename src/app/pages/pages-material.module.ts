import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
	],
	exports: [
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
	],
	providers: []
})

export class PagesMaterialModule { }
