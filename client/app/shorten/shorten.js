angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.$location = $location;
  $scope.addLink = Links.addOne;
  $scope.submitForm = function() {
    if ($scope.shortenLink.$valid) {
      $scope.addLink($scope.fullUrl);
    }
  };
});
