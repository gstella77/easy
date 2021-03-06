import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-button, .btn-xs, .btn-sm, .btn-md, .btn-lg, .btn-xl, .btn-full',
	templateUrl: './button.component.html',
	styleUrls: [
		'./button.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
	@HostBinding('attr.type')
	public get type(): string {
		return this.hostType;
	}

	public set type(type: string) {
		this.hostType = type || 'button';
	}

	private hostType: string;

	public constructor() {
		this.hostType = '';
	}

	public ngOnInit(): void {
		this.type = this.hostType;
	}
}
