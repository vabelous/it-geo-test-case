import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { LayoutsMaterialModule } from './layouts-material.module';
import { TopBarModule } from './top-bar/top-bar.module';



@NgModule({
	imports: [
		FlexLayoutModule,
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		LayoutsRoutingModule,
		LayoutsMaterialModule,
		TopBarModule,
	],
	declarations: [
		LayoutsComponent,
		LeftSideNavComponent,
	],
	exports: [
		LayoutsComponent,
	],
})
export class LayoutsModule { }
