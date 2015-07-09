/**
 * Created by malikasinger on 06/06/2015.
 */


var app = angular.module("myApp",['ngNewRouter']);

app.controller("AppController",AppController);

AppController.$routeConfig = [
        {path : "/" , component : "home"}
    ]

function AppController($router){


    this.showform = false;
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
                name:   this.new.name,
                age:    this.new.age,
                email:  this.new.email
            }
        );

        this.new.name = "";
        this.new.age = "";
        this.new.email = "";

    };
    this.updateentry = function(){



    };

    this.clearform = function(){

        this.new.name = "";
        this.new.age = "";
        this.new.email = "";

    };

    this.updatebtn = false;
    this.submitbtn = true;

    this.editentry = function(d){

        this.new.name =   d.name;
        this.new.age  =   d.age;
        this.new.email =  d.email;

        this.updatebtn = true;
        this.submitbtn = false;
        this.showform = true;
    }




}