angular.module('gradingWizardApp').filter('isPassing',['trace',function(trace){
  return function(params){
    if(params == 0){
      return "Passing"
    } else {
      return "Failing";
    }
  };
}]);