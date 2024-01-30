/**
 * Unit tests for the MovieInfoComponent.
 * @module movie-info.spec
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponent } from './movie-info.component';
/**
 * Test suite for the MovieInfoComponent.
 * @class
 */

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;


  /**
   * Asynchronous setup before each test.
   * @async
   */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   /**
   * Test case: should create an instance of MovieInfoComponent.
   * @test
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
