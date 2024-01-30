/**
 * Unit tests for the UserLoginFormComponent.
 * @module user-login-form.spec
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginFormComponent } from './user-login-form.component';

/**
 * Describe block for UserLoginFormComponent tests.
 * @class
 */

describe('UserLoginFormComponent', () => {
  let component: UserLoginFormComponent;
  let fixture: ComponentFixture<UserLoginFormComponent>;

  /**
   * Before each test, configure the testing module.
   * @function
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginFormComponent]
    });
    fixture = TestBed.createComponent(UserLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case to check if the component is created.
   * @function
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
