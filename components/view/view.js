/**
 * Created by malikasinger on 08/07/2015.
 */
var app = angular.module("app.view", ['ngNewRouter']);

app.controller("ViewController", function (dataservice, $location) {


    this.users = dataservice.users;

    this.deleteentry = function (index) {

        if (confirm("are you sure to delete?") == true) {

            dataservice.users.splice(index, 1);

        }
    };

    this.editentry = function (index) {
        dataservice.currentuser = index;

        $location.path('/update');

    };

});