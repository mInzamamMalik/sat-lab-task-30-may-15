/**
 * Created by malikasinger on 09/07/2015.
 */
var app = angular.module("app.update", []);

app.controller("UpdateController", function ($location, dataservice) {
    var vm = this;
    var index = dataservice.currentuser;

    this.updateentry = function () {

        dataservice.users[index].name = this.name;
        dataservice.users[index].age = this.age;
        dataservice.users[index].email = this.email;
        $location.path("/view");
    };


    (function () {
        vm.name = dataservice.users[index].name;
        vm.age = dataservice.users[index].age;
        vm.email = dataservice.users[index].email;

    })();

});