/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var EasyComponent = /** @class */ (function () {
    function EasyComponent() {
    }
    /**
     * @return {?}
     */
    EasyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    EasyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-root',
                    template: "<!-- TODO: Can this work without routing? -->\r\n<!-- <a [routerLink]=\"\" fragment=\"content\" class=\"sr-only\">Skip to content</a> -->\r\n\r\n<ng-content></ng-content>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["/*! Easy CSS/Angular Framework v0.0.1\r\n * Author: Paul Chehak\r\n * License: MIT License\r\n */a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}.order-md-1{-webkit-box-ordinal-group:2;order:1}}@media screen and (min-width:64em){html{font-size:16px}.order-sm-1{-webkit-box-ordinal-group:2;order:1}}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:\"\\2012\";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}label{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex}select{overflow-y:auto}select::-ms-value{background-color:none;color:inherit}optgroup{font-weight:bolder}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex=\"-1\"]:focus,input[type=range]:focus{outline:0}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.disabled,:disabled,[disabled]{background-color:#bdbdbd;color:#191919}.disabled:hover,:disabled:hover,[disabled]:hover{cursor:not-allowed}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{-webkit-box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{-webkit-box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16);box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{-webkit-box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19);box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{-webkit-box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25);box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{-webkit-box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3);box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}/*! Easy CSS/Angular Framework v0.0.1\r\n * Author: Paul Chehak\r\n * License: MIT License\r\n */.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red,.border-rl-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-bt-red,.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple,.border-rl-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-bt-lt-purple,.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple,.border-rl-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-bt-purple,.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple,.border-rl-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-bt-dk-purple,.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow,.border-rl-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-bt-yellow,.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange,.border-rl-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-bt-orange,.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green,.border-rl-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-bt-lt-green,.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green,.border-rl-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-bt-green,.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green,.border-rl-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-bt-dk-green,.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue,.border-rl-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-bt-lt-blue,.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue,.border-rl-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-bt-blue,.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue,.border-rl-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-bt-dk-blue,.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray,.border-rl-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-bt-lt-gray,.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray,.border-rl-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-bt-gray,.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray,.border-rl-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-bt-dk-gray,.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white,.border-rl-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-bt-white,.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black,.border-rl-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-bt-black,.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start}.col,.col-full{align-content:flex-start;-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{-webkit-box-pack:center;justify-content:center}.align-l,.col.align-t{-webkit-box-pack:start;justify-content:flex-start}.align-r,.col.align-b{-webkit-box-pack:end;justify-content:flex-end}.align-m,.col.align-c{-webkit-box-align:center;align-items:center;align-content:center}.align-b,.col.align-r{-webkit-box-align:end;align-items:flex-end;align-content:flex-end}.align-sp{justify-content:space-around}.align-j{-webkit-box-pack:justify;justify-content:space-between}.align-st,.col.align-st{-webkit-box-align:stretch;align-items:stretch;align-content:stretch}.align-a{-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start}.col.wrap-r,.wrap-b{align-content:flex-end}.col.wrap-c,.wrap-m{align-content:center}.wrap-j{align-content:space-between}.wrap-sp{align-content:space-around}.wrap-st{align-content:stretch}.wrap{flex-wrap:wrap}.col>.item-l,.item-t{align-self:flex-start}.col>.item-r,.item-b{align-self:flex-end}.col>.item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-c,.item-l{margin-right:auto}.item-c,.item-r{margin-left:auto}.col>.item-m,.col>.item-t{margin-bottom:auto}.col>.item-b,.col>.item-m{margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.flex-both-1{flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:1}.flex-grow-1{flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}.flex-shrink-1{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:1}.order,.order-xs-1{-webkit-box-ordinal-group:2;order:1}@media screen and (min-width:64em){.order-lg-1,.order-xl-1{-webkit-box-ordinal-group:2;order:1}.order-sm-2{-webkit-box-ordinal-group:3;order:2}}.flex-both-2{flex-basis:0;-webkit-box-flex:2;flex-grow:2;flex-shrink:2}.flex-grow-2{flex-basis:0;-webkit-box-flex:2;flex-grow:2;flex-shrink:0}.flex-shrink-2{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:2}.order,.order-xs-2{-webkit-box-ordinal-group:3;order:2}@media screen and (min-width:48em){.order-md-2{-webkit-box-ordinal-group:3;order:2}}@media screen and (min-width:64em){.order-lg-2,.order-xl-2{-webkit-box-ordinal-group:3;order:2}.order-sm-3{-webkit-box-ordinal-group:4;order:3}}.flex-both-3{flex-basis:0;-webkit-box-flex:3;flex-grow:3;flex-shrink:3}.flex-grow-3{flex-basis:0;-webkit-box-flex:3;flex-grow:3;flex-shrink:0}.flex-shrink-3{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:3}.order,.order-xs-3{-webkit-box-ordinal-group:4;order:3}@media screen and (min-width:48em){.order-md-3{-webkit-box-ordinal-group:4;order:3}}@media screen and (min-width:64em){.order-lg-3,.order-xl-3{-webkit-box-ordinal-group:4;order:3}.order-sm-4{-webkit-box-ordinal-group:5;order:4}}.flex-both-4{flex-basis:0;-webkit-box-flex:4;flex-grow:4;flex-shrink:4}.flex-grow-4{flex-basis:0;-webkit-box-flex:4;flex-grow:4;flex-shrink:0}.flex-shrink-4{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:4}.order,.order-xs-4{-webkit-box-ordinal-group:5;order:4}@media screen and (min-width:48em){.order-md-4{-webkit-box-ordinal-group:5;order:4}}@media screen and (min-width:64em){.order-lg-4,.order-xl-4{-webkit-box-ordinal-group:5;order:4}.order-sm-5{-webkit-box-ordinal-group:6;order:5}}.flex-both-5{flex-basis:0;-webkit-box-flex:5;flex-grow:5;flex-shrink:5}.flex-grow-5{flex-basis:0;-webkit-box-flex:5;flex-grow:5;flex-shrink:0}.flex-shrink-5{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:5}.order,.order-xs-5{-webkit-box-ordinal-group:6;order:5}@media screen and (min-width:48em){.order-md-5{-webkit-box-ordinal-group:6;order:5}}@media screen and (min-width:64em){.order-lg-5,.order-xl-5{-webkit-box-ordinal-group:6;order:5}.order-sm-6{-webkit-box-ordinal-group:7;order:6}}.flex-both-6{flex-basis:0;-webkit-box-flex:6;flex-grow:6;flex-shrink:6}.flex-grow-6{flex-basis:0;-webkit-box-flex:6;flex-grow:6;flex-shrink:0}.flex-shrink-6{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:6}.order,.order-xs-6{-webkit-box-ordinal-group:7;order:6}@media screen and (min-width:48em){.order-md-6{-webkit-box-ordinal-group:7;order:6}}@media screen and (min-width:64em){.order-lg-6,.order-xl-6{-webkit-box-ordinal-group:7;order:6}.order-sm-7{-webkit-box-ordinal-group:8;order:7}}.flex-both-7{flex-basis:0;-webkit-box-flex:7;flex-grow:7;flex-shrink:7}.flex-grow-7{flex-basis:0;-webkit-box-flex:7;flex-grow:7;flex-shrink:0}.flex-shrink-7{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:7}.order,.order-xs-7{-webkit-box-ordinal-group:8;order:7}@media screen and (min-width:48em){.order-md-7{-webkit-box-ordinal-group:8;order:7}}@media screen and (min-width:64em){.order-lg-7,.order-xl-7{-webkit-box-ordinal-group:8;order:7}.order-sm-8{-webkit-box-ordinal-group:9;order:8}}.flex-both-8{flex-basis:0;-webkit-box-flex:8;flex-grow:8;flex-shrink:8}.flex-grow-8{flex-basis:0;-webkit-box-flex:8;flex-grow:8;flex-shrink:0}.flex-shrink-8{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:8}.order,.order-xs-8{-webkit-box-ordinal-group:9;order:8}@media screen and (min-width:48em){.order-md-8{-webkit-box-ordinal-group:9;order:8}}@media screen and (min-width:64em){.order-lg-8,.order-xl-8{-webkit-box-ordinal-group:9;order:8}.order-sm-9{-webkit-box-ordinal-group:10;order:9}}.flex-both-9{flex-basis:0;-webkit-box-flex:9;flex-grow:9;flex-shrink:9}.flex-grow-9{flex-basis:0;-webkit-box-flex:9;flex-grow:9;flex-shrink:0}.flex-shrink-9{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:9}.order,.order-xs-9{-webkit-box-ordinal-group:10;order:9}@media screen and (min-width:48em){.order-md-9{-webkit-box-ordinal-group:10;order:9}}@media screen and (min-width:64em){.order-lg-9,.order-xl-9{-webkit-box-ordinal-group:10;order:9}.order-sm-10{-webkit-box-ordinal-group:11;order:10}}.flex-both-10{flex-basis:0;-webkit-box-flex:10;flex-grow:10;flex-shrink:10}.flex-grow-10{flex-basis:0;-webkit-box-flex:10;flex-grow:10;flex-shrink:0}.flex-shrink-10{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:10}.order,.order-xs-10{-webkit-box-ordinal-group:11;order:10}@media screen and (min-width:48em){.order-md-10{-webkit-box-ordinal-group:11;order:10}}@media screen and (min-width:64em){.order-lg-10,.order-xl-10{-webkit-box-ordinal-group:11;order:10}.order-sm-11{-webkit-box-ordinal-group:12;order:11}}.flex-both-11{flex-basis:0;-webkit-box-flex:11;flex-grow:11;flex-shrink:11}.flex-grow-11{flex-basis:0;-webkit-box-flex:11;flex-grow:11;flex-shrink:0}.flex-shrink-11{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:11}.order,.order-xs-11{-webkit-box-ordinal-group:12;order:11}@media screen and (min-width:48em){.order-md-11{-webkit-box-ordinal-group:12;order:11}}@media screen and (min-width:64em){.order-lg-11,.order-xl-11{-webkit-box-ordinal-group:12;order:11}.order-sm-12{-webkit-box-ordinal-group:13;order:12}}.flex-both-12{flex-basis:0;-webkit-box-flex:12;flex-grow:12;flex-shrink:12}.flex-grow-12{flex-basis:0;-webkit-box-flex:12;flex-grow:12;flex-shrink:0}.flex-shrink-12{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:12}.order,.order-xs-12{-webkit-box-ordinal-group:13;order:12}.flex-n{flex-basis:0;-webkit-box-flex:0;flex-grow:0;flex-shrink:0}@media screen and (min-width:30em){.container{width:80%}.container-fluid{width:28rem}}@media screen and (min-width:48em){.order-md-12{-webkit-box-ordinal-group:13;order:12}.container-fluid{width:48rem}}@media screen and (min-width:64em){.order-lg-12,.order-xl-12{-webkit-box-ordinal-group:13;order:12}.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;padding:1rem;width:100%}.footer-sticky{align-content:flex-start;-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;flex-wrap:nowrap;height:100%}.footer-sticky :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs,.mar-rl-xs{margin-left:.5rem;margin-right:.5rem}.mar-bt-xs,.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs,.pad-rl-xs{padding-left:.5rem;padding-right:.5rem}.pad-bt-xs,.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm,.mar-rl-sm{margin-left:1rem;margin-right:1rem}.mar-bt-sm,.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm,.pad-rl-sm{padding-left:1rem;padding-right:1rem}.pad-bt-sm,.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md,.mar-rl-md{margin-left:1.5rem;margin-right:1.5rem}.mar-bt-md,.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md,.pad-rl-md{padding-left:1.5rem;padding-right:1.5rem}.pad-bt-md,.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg,.mar-rl-lg{margin-left:2rem;margin-right:2rem}.mar-bt-lg,.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg,.pad-rl-lg{padding-left:2rem;padding-right:2rem}.pad-bt-lg,.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl,.mar-rl-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-bt-xl,.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl,.pad-rl-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-bt-xl,.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.mar-n{margin:0}.pad-n{padding:0}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.text-drop-cap::first-letter{float:left;font-size:2.25rem;padding-right:.5rem}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.sr-only{clip:rect(.0625rem,.0625rem,.0625rem,.0625rem);height:.0625rem;position:absolute;overflow:hidden;width:.0625rem}.sr-only:active,.sr-only:focus,.sr-only:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}"]
                }] }
    ];
    /** @nocollapse */
    EasyComponent.ctorParameters = function () { return []; };
    return EasyComponent;
}());
export { EasyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lYXN5LWZyYW1ld29yay8iLCJzb3VyY2VzIjpbImxpYi9lYXN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRTtJQU9DO0lBQXNCLENBQUM7Ozs7SUFFaEIsZ0NBQVE7OztJQUFmLGNBQXlCLENBQUM7O2dCQVQxQixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDBMQUFvQztvQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztJQUtELG9CQUFDO0NBQUEsQUFWRCxJQVVDO1NBSlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1yb290JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWFzeS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vZWFzeS5jb21wb25lbnQuc2NzcyddLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19