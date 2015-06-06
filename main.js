/**
 * Created by malikasinger on 06/06/2015.
 */


var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){

    $scope.store = [];
    $scope.add = function(){

        $scope.store.push($scope.new);

    };




});