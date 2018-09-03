/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class AlertComponent {
    constructor() {
    }
    /**
     * @param {?} childClass
     * @return {?}
     */
    set class(childClass) {
        if (childClass.includes('close')) {
            this.childClass = childClass.replace(/ close/g, '');
            this.close = true;
            this.role = 'alertdialog';
        }
        else {
            this.childClass = childClass;
            this.role = 'alert';
        }
    }
    /**
     * @return {?}
     */
    get class() {
        return this.childClass;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hostClass = this.class;
        this.tabindex = '-1';
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [id]=\"\">\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\n",
                styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    ariaDescribedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    hostClass: [{ type: HostBinding, args: ['attr.class',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    class: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.ariaDescribedby;
    /** @type {?} */
    AlertComponent.prototype.ariaLabelledby;
    /** @type {?} */
    AlertComponent.prototype.hostClass;
    /** @type {?} */
    AlertComponent.prototype.role;
    /** @type {?} */
    AlertComponent.prototype.tabindex;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.childClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3RFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBTTFCLElBQ1csS0FBSyxDQUFDLFVBQWtCO1FBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzFCO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtLQUNEOzs7O1FBRVUsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7SUFXakIsUUFBUTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7OztZQXZDdEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2REFBNkQ7Z0JBQ3ZFLHNMQUFxQzs7YUFJckM7Ozs7OzhCQUVDLFdBQVcsU0FBQyx1QkFBdUI7NkJBQ25DLFdBQVcsU0FBQyxzQkFBc0I7d0JBQ2xDLFdBQVcsU0FBQyxZQUFZO21CQUN4QixXQUFXLFNBQUMsV0FBVzt1QkFDdkIsV0FBVyxTQUFDLGVBQWU7b0JBQzNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0LCAuYWxlcnQtYmFkLCAuYWxlcnQtZ29vZCwgLmFsZXJ0LWluZm8sIC5hbGVydC13YXJuJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieTogc3RyaW5nO1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgaG9zdENsYXNzOiBzdHJpbmc7XG5cdEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZTogc3RyaW5nO1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogc3RyaW5nO1xuXHRASW5wdXQoKVxuXHRwdWJsaWMgc2V0IGNsYXNzKGNoaWxkQ2xhc3M6IHN0cmluZykge1xuXHRcdGlmIChjaGlsZENsYXNzLmluY2x1ZGVzKCdjbG9zZScpKSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzLnJlcGxhY2UoLyBjbG9zZS9nLCAnJyk7XG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydGRpYWxvZyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3M7XG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnQnO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jaGlsZENsYXNzO1xuXHR9XG5cblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcblx0fVxufVxuIl19