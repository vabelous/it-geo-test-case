import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
	declarations: [],
	imports: [
		MatSidenavModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule
	],
	exports: [
		MatSidenavModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule
	],
	providers: []
	})

export class TopBarMaterialModule { }
