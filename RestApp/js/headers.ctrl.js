/**
 * A controller responsible for handling CRUD operations on custom request headers.
 */
RestClientApp.controller('HeadersCtrl', function ($scope, $uibModal, headers, utils, GENERAL_CONSTANTS) {

	//The headers that should be added to subsequent requests.
	$scope.headers = headers.get();
	
	$scope.showAllHeaders = function () {
		$scope.showHeaderHeaders();
		$scope.showParamHeaders();
	};

	$scope.showHeaderHeaders = function () {
		if ($("#allheaders").find(".realinputvalue").length > 0) {
			$("#allheaders").show();
		} else {
			$("#allheaders").hide();
		}
	};
	
	$scope.showParamHeaders = function () {
		if ($("#allparameters").find(".realinputvalue").length > 0) {
			$("#allparameters").show();
		} else {
			$("#allparameters").hide();
		}
	};

	$scope.showHeaders = function () {
		$('.httpparameter:first').clone(true).appendTo("#allheaders");
		$scope.showAllHeaders();
	};
	
	$scope.showParameters = function () {
		$('.httpparameter:first').clone(true).appendTo("#allparameters");
		$scope.showAllHeaders();
	};

	//Identifies if the supplied object is empty.
	$scope.isEmptyObject = function (object) {
		return utils.isEmptyObject(object);
	};
});

RestClientApp.directive('removeOnClick', function () {
    return {
        link: function (scope, elt, attrs) {
            $(elt).bind("click", function () {
				$(this).parent().remove();
				scope.showAllHeaders();
			});
        }
    }
});


