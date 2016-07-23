angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    url: ''
  };
  // $scope.url = {
  //   text: 'http://google.com'
  // }
  $scope.test = 'TEST';
  
  $scope.addLink = function (){ 
    var urlObj = { url: $scope.link.url }
    console.log($scope.link);
    Links.addLink(urlObj)
      .then(function () {
        // $location.path('/links');  
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});
