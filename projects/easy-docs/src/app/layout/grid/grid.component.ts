import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {

}
