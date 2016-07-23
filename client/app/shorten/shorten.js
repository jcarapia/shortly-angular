angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {

  };
  $scope.test = 'TEST';
  
  $scope.addLink = function () {
    var urlObj = { url: $scope.link.url }
    Links.addLink(urlObj)
      .then(function () {
        // $location.path('/links');  
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});
