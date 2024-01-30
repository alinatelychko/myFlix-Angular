/**
 * Test suite for UserProfileComponent.
 * @module user-profile
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';

/**
 * Test suite for UserProfileComponent.
 * @class
 */

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

   /**
   * Asynchronous setup function before each test case.
   * @function
   */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
 /**
   * Test case to ensure the creation of UserProfileComponent.
   * @function
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});