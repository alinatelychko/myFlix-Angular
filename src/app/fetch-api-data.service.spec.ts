/**
 * Unit tests for the FetchApiDataService.
 * These tests ensure that the FetchApiDataService is created successfully.
 * @module FetchApiDataService Tests
 */

import { TestBed } from '@angular/core/testing';

import { FetchApiDataService } from './fetch-api-data.service';

/**
 * Describe block for the FetchApiDataService.
 * This block contains the setup logic to configure the TestBed and inject the service.
 */
describe('FetchApiDataService', () => {
  let service: FetchApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
