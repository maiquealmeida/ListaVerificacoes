// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "views/menu.html",
                controller: 'MenuCtrl'
            })

            .state('app.pesquisa', {
                url: "/pesquisa",
                views: {
                    'menuContent' :{
                        templateUrl: "views/pesquisar.html"
                    }
                }
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "views/home.html"
                    }
                }
            })
            .state('app.modelos', {
                url: "/modelos",
                views: {
                    'menuContent' :{
                        templateUrl: "views/modelos.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })
            .state('app.listas', {
                url: "/listas",
                views: {
                    'menuContent' :{
                        templateUrl: "views/listas.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.lista', {
                url: "/lista/:playlistId",
                views: {
                    'menuContent' :{
                        templateUrl: "views/lista.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
