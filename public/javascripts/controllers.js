'use strict';

var demo = angular.module('AnimalApp', ['ui.select']).config(configure);

function configure(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
}

demo.controller('AnimalCtrl', ['$http',
  function ($http) {

    var vm = this;
    vm.selected = null;
    // vm.results = [
    //   { id: 1, name: "dog" },
    //   { id: 2, name: "cat" },
    //   { id: 3, name: "panda" },
    //   { id: 4, name: "snake" },
    //   { id: 5, name: "bird" }
    // ];

    $http.get('animal/list').success(function(data) {
        vm.results = data;
    });

}]);
