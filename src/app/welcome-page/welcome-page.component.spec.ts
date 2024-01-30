/**
 * Unit tests for the WelcomePageComponent.
 * @module WelcomePageComponent
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';

/**
 * Test suite for the WelcomePageComponent.
 * @class
 */

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  /**
   * Setup function to configure and create the component for testing.
   * @function
   */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case to check if the component is created successfully.
   * @test
   */
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
