'use strict';

/**
 * @ngdoc function
 * @name gradingWizardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gradingWizardApp
 */
angular.module('gradingWizardApp')
  .controller('MainController', ['$scope','$http','ServerUrl','ReposFactory','trace',function($scope, $http, ServerUrl, ReposFactory, trace){
    $scope.repos = ReposFactory.repos;

    trace($scope.repos);
  }]);
