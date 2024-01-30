/**
 * Unit tests for the MovieCardComponent.
 * @module movie-card
 * @module spec
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';

/**
 * Test suite for the MovieCardComponent.
 * @suite
 */

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

/**
   * Asynchronous setup before each test case.
   * Configures and compiles the test module.
   */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   /**
   * Test case: should create
   * Checks if the component is successfully created.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
