import { TestBed } from '@angular/core/testing';

import { ServicesMoviesService } from './services-movies.service';

describe('ServicesMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesMoviesService = TestBed.get(ServicesMoviesService);
    expect(service).toBeTruthy();
  });
});
