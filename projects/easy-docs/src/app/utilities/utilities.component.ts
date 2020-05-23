import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilitiesService } from './utilities.service';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: ['./utilities.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilitiesComponent implements OnInit {
	public navs: string[];

	public constructor(private utilitiesService: UtilitiesService, private router: Router) { }

	public ngOnInit(): void {
		this.navs = [
			'color',
			'dimension',
			'display',
			'position',
			'space',
			'text',
			'typography',
			'visibility'
		];

		this.router.navigate(['/utilities/', this.utilitiesService.nav]);
	}

	public onSetNav(nav: string): void {
		this.utilitiesService.nav = nav;
	}
}
