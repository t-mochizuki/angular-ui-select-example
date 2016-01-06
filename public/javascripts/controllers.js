'use strict';

var demo = angular.module('AnimalApp', ['ui.select']).config(configure);

function configure(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
}

demo.controller('AnimalCtrl', ['$http',
  function ($http) {

    var vm = this;
    vm.selected2 = null;

    $http.get('animal/list').success(function(data) {
        vm.results = data;
    });

}]);

demo.directive('mySelect', function () {
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/assets/views/mySelect.html'
  }
});
