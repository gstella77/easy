import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-container, .container, .container-fluid, .container-full',
	templateUrl: './container.component.html',
	styleUrls: [
		'./container.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {

}
