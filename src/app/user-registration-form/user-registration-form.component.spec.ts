/**
 * Test suite for UserRegistrationFormComponent.
 * @module user-registration-form-spec
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationFormComponent } from './user-registration-form.component';

/**
 * Test suite for the UserRegistrationFormComponent.
 * @class
 */

describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;


  /**
   * Asynchronous setup before each test in the suite.
   * @async
   */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   /**
   * Test case to ensure that the component is created successfully.
   * @function
   */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
