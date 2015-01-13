'use strict';
angular.module('gradingWizardApp').factory('ReposFactory',['$http','ServerUrl','trace',function($http,ServerUrl,trace){

  var repos = [];

  var fetch = function(){
    $http.get(ServerUrl + 'repos').success(function(response){
      angular.copy(response,repos);
    }).error(function(data, status, headers, config) {
      trace(data,status,headers,config, 'errors from repos factory');
    });
  };

  return {
    fetch: fetch,
    repos: repos
  };
}]);