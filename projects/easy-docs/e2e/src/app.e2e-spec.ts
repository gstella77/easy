import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display home works!', () => {
		page.navigateTo();

		expect(page.getTitleText()).toEqual('home works!');
	});

	afterEach(async() => {

		// Assert that there are no errors emitted from the browser
		const logs: any = await browser
		.manage()
		.logs()
		.get(logging.Type.BROWSER);

		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			})
		);
	});
});