import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts.component';



// import { AppWidgetsModule } from '@sfo-widgets/widgets.module';
// import { CartModule } from './cart/cart.module';
import { InteractionMaterialModule } from './interaction-material.module';
import { InteractionRoutingModule } from './interaction-routing.module';
import { InteractionWidgetsModule } from './widgets-modules/widgets.module';
import { TopbarModule } from 'app/topbar/topbar.module';
import { InfoDetailsComponent } from './components/info-details/info-details.component';


import { I18nModule } from '@sfo-modules/i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoComponent } from './components/info/info.component';
import { ScenarioWrapperComponent } from './components/scenario-wrapper/scenario-wrapper.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';



@NgModule({
	imports: [
		I18nModule,
		FlexLayoutModule,
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		InteractionWidgetsModule,
		InteractionMaterialModule,
		InteractionRoutingModule,
		TopbarModule,

	],
	declarations: [
		InteractionComponent,
		ScenarioWrapperComponent,
		InfoDetailsComponent,
		InfoComponent,
		LeftSideNavComponent,
	],
	exports: [
		LayoutsComponent,
	],
})
export class LayoutsModule { }
