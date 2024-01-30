/**
 * Configuration file for the Angular application.
 * Defines providers and configurations for the application.
 * @module appConfig
 */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

/**
 * Application configuration object.
 * @type {ApplicationConfig}
 */

export const appConfig: ApplicationConfig = {
   /**
   * Array of providers for the application.
   * Includes the router provider and animation-related providers.
   * @property {Array}
   */
  
  providers: [provideRouter(routes), provideAnimations(), provideAnimations(), provideAnimations(), provideAnimations(), provideAnimations()]
};
