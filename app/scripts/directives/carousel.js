'use strict';

angular.module('testingApp')
  .directive('carousel', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        $(element[0]).carousel({
        	interval:3000
        });
      }
    };
  });
