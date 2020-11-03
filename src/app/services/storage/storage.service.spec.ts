import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save key and value to storage', () => {
    const obj = { value: 'test' }
    service.setObject('key', obj);
    const result = service.getObject('key').then((result: { value: any }) => {
      expect(result).toEqual(obj);
    });
  });
});
