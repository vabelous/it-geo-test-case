import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({})

export class SvgIconsModule {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.matIconRegistry.addSvgIcon(
			'logo',
			this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/icons/logo_mos.svg')
		);
	}
}
