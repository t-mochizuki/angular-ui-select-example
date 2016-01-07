'use strict';

var demo = angular.module('AnimalApp', ['ui.select']).config(configure);

function configure(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
}

demo.controller('AnimalCtrl', ['$http',
  function ($http) {

    var vm = this;
    vm.selectedItem = [];

    $http.get('animal/list').success(function(data) {
        vm.allItems = data;
    });

}]);

demo.directive('mySelect', function () {
  return {
    scope: {
      selectedItem: '=',
      allItems: '='
    },
    templateUrl: '/assets/views/mySelect.html'
  }
});
