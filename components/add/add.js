/**
 * Created by malikasinger on 08/07/2015.
 */

var app = angular.module("app.add",[]);

app.controller("AddController", function ($location, dataservice) {

    this.addentry = function () {
        dataservice.users.push(
            {
                name: this.name,
                age: this.age,
                email: this.email
            }
        );
        $location.path("/view");

    };
    this.clearform = function () {
        this.name = "";
        this.age = null;
        this.email = "";
    }

});