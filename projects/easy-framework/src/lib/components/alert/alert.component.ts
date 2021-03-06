import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
	@HostBinding('attr.aria-labelledby') public ariaLabelledBy: string;
	@HostBinding('attr.class') public hostClass: string;
	@Input()
	public get class(): string {
		return this.classList;
	}

	public set class(classList: string) {
		if (classList.includes('close')) {
			this.classList = classList.replace(/ close|close /gu, '');
			this.close = true;
			this.renderer2.setAttribute(this.elementRef.nativeElement, 'role', 'alertdialog');
		} else {
			this.classList = classList;
			this.close = false;
			this.renderer2.setAttribute(this.elementRef.nativeElement, 'role', 'alert');
		}

		this.ariaLabelledBy = this.class.match(/\balert\S+\b/u)![0];
		this.id = this.class.match(/\balert\S+\b/u)![0];
	}

	public close: boolean;
	public id: string;

	private classList: string;

	public constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
		this.ariaLabelledBy = '';
		this.classList = '';
		this.close = false;
		this.hostClass = '';
		this.id = '';
	}

	public ngOnInit(): void {
		this.hostClass = this.class;
		this.renderer2.setAttribute(this.elementRef.nativeElement, 'tabindex', '-1');
	}

	public onClose(): void {
		this.hostClass = 'hide';
	}

	public onTrap(): void {
		this.elementRef.nativeElement.focus();
	}
}
