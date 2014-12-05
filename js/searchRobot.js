var robotsApp = angular.module('robotsApp', ['ui.bootstrap']);
robotsApp.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);
Array.prototype.unique = function (){  
    var r = new Array();  
    o:for(var i = 0, n = this.length; i < n; i++){  
        for(var x = 0, y = r.length; x < y; x++){  
            if(r[x]==this[i]) continue o;}  
        r[r.length] = this[i];}  
    return r;  
}  
robotsApp.controller('searchRobotCtrl', function($scope) {
    $scope.robots = robotsData;
    $scope.appOptions = [];
    $scope.brands = [];
    var appNames = [];
    var brandNames = [];
    for (var i = 0; i < $scope.robots.length; i++){
        $scope.robots[i].applicationFull = robotsData[i].application.join(' ');
        appNames = appNames.concat(robotsData[i].application).unique();
        brandNames.push(robotsData[i].brand);
        brandNames = brandNames.unique();
    }
    for (var i = 0; i < appNames.length; i++){
        var app ={};
        app.name = appNames[i];
        app.selected = false;
        $scope.appOptions.push(app);
    }
    for (var i = 0; i < brandNames.length; i++){
        var brand ={};
        brand.name = brandNames[i];
        brand.selected = false;
        $scope.brands.push(brand);
    }
});