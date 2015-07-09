/**
 * Created by malikasinger on 06/06/2015.
 */


var app = angular.module("myApp", ['ngNewRouter', 'ngMaterial',
    'app.home', 'app.add', 'app.view', 'app.update']);

app.controller("AppController",AppController);

AppController.$routeConfig = [
        {path : '/'     ,    component : 'home'  },
        {path : '/add'  ,    component : 'add'   },
    {path: '/view', component: 'view'},
    {path: '/update', component: 'update'}
    ];

function AppController($router){

}


app.service("dataservice", function () {

    this.users = [
        {
            name: "inzamam malik",
            age: 20,
            email: "malikasinger@gmail.com"
        }
    ];

});