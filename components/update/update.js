/**
 * Created by malikasinger on 09/07/2015.
 */
var app = angular.module("app.update", []);

app.controller("UpdateController", function ($location, dataservice) {

    this.index = dataservice.currentuser;
    this.updateentry = function () {

        
    }

});