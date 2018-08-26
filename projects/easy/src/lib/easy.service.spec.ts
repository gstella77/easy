import { TestBed, inject } from '@angular/core/testing';

import { EasyService } from './easy.service';

	describe('EasyService', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [
					EasyService
				]
		});
	});

	it('should be created', inject([EasyService], (service: EasyService) => {
		expect(service).toBeTruthy();
	}));
});
