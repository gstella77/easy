import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
.bootstrapModule(AppModule, {
	defaultEncapsulation: ViewEncapsulation.None
})
.catch((error: Error) => {
	console.error(error);
});