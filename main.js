/**
 * Created by malikasinger on 06/06/2015.
 */


var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){


    $scope.showform = false;
    $scope.showentry = false;
    $scope.addtab = function(){

      $scope.showform = true;
      $scope.showentry = false;


    };
    $scope.viewtab = function(){

      $scope.showform = false;
      $scope.showentry = true;


    };

    $scope.store = [];

    $scope.addentry = function(){


        $scope.store.push(

            {
                name:$scope.new.name,
                age:$scope.new.age,
                email:$scope.new.email
            }
        );

        $scope.new.name = "";
        $scope.new.age = "";
        $scope.new.email = "";

    };
    $scope.updateentry = function(){



    };

    $scope.clearform = function(){

        $scope.new.name = "";
        $scope.new.age = "";
        $scope.new.email = "";

    };

    $scope.updatebtn = false;
    $scope.submitbtn = true;

    $scope.editentry = function(d){

        $scope.new.name =   d.name;
        $scope.new.age  =   d.age;
        $scope.new.email =  d.email;

        $scope.updatebtn = true;
        $scope.submitbtn = false;
        $scope.showform = true;
    }




});
