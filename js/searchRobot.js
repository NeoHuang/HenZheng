'use strict'
var robotsApp = angular.module('robotsApp', ['ui.bootstrap', 'ngAnimate']);
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
robotsApp.filter('robotFilter', function()
                 {
    return function(robots, filter){
        var filteredRobots = [];
        var selectedBrands = [];
        var selectedAppOptions = [];
        if (filter.brands != undefined && Array.isArray(filter.brands))
        {

            for (var j = 0; j < filter.brands.length; j++)
            {
                if (filter.brands[j].selected){
                    selectedBrands.push(filter.brands[j].name);
                }
            }
        }
        if (filter.appOptions != undefined && Array.isArray(filter.appOptions))
        {

            for (var j = 0; j < filter.appOptions.length; j++)
            {
                if (filter.appOptions[j].selected){
                    selectedAppOptions.push(filter.appOptions[j].name);
                }
            }
        }
        
        for (var i = 0; i < robots.length; i++)
        {
            //check brands
            
            if (selectedBrands.length > 0 && selectedBrands.indexOf(robots[i].brand) < 0)
            {
                continue;
            }

            //check applications
            if (selectedAppOptions.length > 0){
                var contains = true;
                for (var j = 0; j < selectedAppOptions.length; j++){
                    if (robots[i].application.indexOf(selectedAppOptions[j]) < 0){
                        
                        contains = false;
                        break;
                    }
                }
                if (!contains){
                    console.log(selectedAppOptions[j]);
                    continue;
                }
            }
            // check reach
            if (filter.reach != undefined){
                var reach = parseFloat(filter.reach);
                if (reach != NaN){
                    if (robots[i].reach < reach){
                    continue;
                    }
                }
                
            }
            
            // check load
            if (filter.load != undefined) {
                var load = parseFloat(filter.load);
                if (load != NaN){
                    if (robots[i].load < load){
                    continue;
                    }
                }
            }
            
            if (filter.precision != undefined) {
                var precision = parseFloat(filter.precision);
                if (precision != NaN){
                    if (robots[i].precision > precision){
                    continue;
                    }
                }
            }

            filteredRobots.push(robots[i]);
        }
        console.log(filteredRobots);
        return filteredRobots;
    }
});
robotsApp.controller('searchRobotCtrl', function($scope) {
    $scope.robots = robotsData;
    $scope.search = {};
    $scope.search.appOptions = [];
    $scope.search.brands = [];
    var appNames = [];
    var brandNames = [];
    for (var i = 0; i < $scope.robots.length; i++){
        $scope.robots[i].applicationFull = robotsData[i].application.join(' ');
        appNames = appNames.concat(robotsData[i].application).unique();
        brandNames.push(robotsData[i].brand);
        brandNames = brandNames.unique();
    }
    //generate application options;
    for (var i = 0; i < appNames.length; i++){
        var app ={};
        app.name = appNames[i];
        app.selected = false;
        $scope.search.appOptions.push(app);
    }
    //Generate brands list
    for (var i = 0; i < brandNames.length; i++){
        var brand ={};
        brand.name = brandNames[i];
        brand.selected = false;
        $scope.search.brands.push(brand);
    }


});