var RestClientApp = angular.module('RestClientApp',['ui.codemirror','ui.bootstrap','angular-loading-bar','ngAnimate',
 'hljs', 'common', 'smart-table']);
 
 RestClientApp.config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){
     cfpLoadingBarProvider.includeSpinner = false;
     cfpLoadingBarProvider.parentSelector = '#angular-loading-bar-container';
 }])