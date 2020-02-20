import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';



@NgModule({
	imports: [
		FlexLayoutModule,
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		LayoutsRoutingModule,
	],
	declarations: [
		LayoutsComponent,
		TopBarComponent,
	],
	exports: [
		LayoutsComponent,
	],
})
export class LayoutsModule { }
