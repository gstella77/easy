import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-tooltip, .tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: [
		'./tooltip.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {

}
