'use strict';

/**
 * @ngdoc overview
 * @name gradingWizardApp
 * @description
 * # gradingWizardApp
 *
 * Main module of the application.
 */
angular
  .module('gradingWizardApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
  .run(function(ReposFactory){
    ReposFactory.fetch();
  });
