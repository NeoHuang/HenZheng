var robotsApp = angular.module('robotsApp', []);
robotsApp.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);
robotsApp.controller('searchRobotCtrl', function($scope) {
    $scope.robots = robotsData;
    for (var i = 0; i < $scope.robots.length; i++){
        $scope.robots[i].applicationFull = robotsData[i].application.join(' ');
    }
});