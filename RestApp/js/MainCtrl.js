RestClientApp.controller('MainCtrl', function ($scope, $http, $rootScope, utils,
    $uibModal, appHelper, headers, requests, REQUEST_METHODS) {
    $scope.requestMethod = {
        selected: REQUEST_METHODS[0],
        methods: REQUEST_METHODS
    };

    $scope.changeRequestMethod = function (method) {
        if (method) {
            $scope.requestMethod.selected = method;
            $scope.requestMethod.isopen = false;
        }
    };

    //Submit the Service Request.
    $scope.submit = function () {
        //Remove any previous errors/alerts and hide the previous response.
        $scope.alerts = [];
        $scope.displayResponse = false;
        $scope.processing = true;

        //Send the request.
        requests.call($scope).then(function (success) {
            appHelper.handleResponse($scope, success);
        }, function (error) {
            appHelper.handleResponse($scope, error);
        });
    };
});



/**/