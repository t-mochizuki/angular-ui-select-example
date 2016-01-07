'use strict';

var demo = angular.module('AnimalApp', ['ui.select']).config(configure);

function configure(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
}

demo.controller('AnimalCtrl', ['$http',
  function ($http) {

    var vm = this;
    vm.ctrlSelectedItem = [];

    $http.get('animal/list').success(function(data) {
        vm.ctrlAllItems = data;
    });

    vm.ctrlText = "";

}]);

demo.directive('mySelect', function () {
  return {
    scope: {
      inputText: '=',
      selectedItem: '=',
      allItems: '='
    },
    templateUrl: '/assets/views/mySelect.html'
  }
});
