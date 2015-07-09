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


    /*this.showform = false;
    this.showentry = false;
    this.addtab = function(){

        this.showform = true;
        this.showentry = false;


    };
    this.viewtab = function(){

        this.showform = false;
        this.showentry = true;


    };

    this.store = [];

    this.addentry = function(){


        this.store.push(

            {
                name:   this.name,
                age:    this.age,
                email:  this.email
            }
        );

        this.name = "";
        this.age = "";
        this.email = "";

    };
    this.updateentry = function(){



    };

    this.clearform = function(){

        thi.name = "";
        this.age = "";
        this.email = "";

    };

    this.updatebtn = false;
    this.submitbtn = true;

    this.editentry = function(d){

        this.name =   d.name;
        this.age  =   d.age;
        this.email =  d.email;

        this.updatebtn = true;
        this.submitbtn = false;
        this.showform = true;
    }


*/

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