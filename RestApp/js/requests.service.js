/**
 * Constructs the HTTP request and allows cancellation of requests.
 */
RestClientApp.service('requests', function($http, $q, appHelper, headers) {
	var helper = this;
	var canceller;

	/**
	 * Cancel the current request.
	 */
	helper.cancel = function() {
		if (canceller) {
			canceller.resolve("cancel");
		}
	};

	/**
	 * Configure the HTTP call and return the promise.
	 */
	helper.call = function($scope) {
		var requestHeaders = helper.addHeaders();
		canceller = $q.defer();
		$scope.timerStart = Date.now();
		var promise = $http({
			method: $scope.requestMethod.selected,
			url: $scope.requestUrl,
			headers: requestHeaders,
			data: $scope.payload,
			timeout: canceller.promise
		});
		return promise;
	};

	/**
	 * Add the custom headers and the auth header.
	 */
	helper.addHeaders = function() {
		var requestHeaders = {};

		//Add custom headers.
		var customHeaders = headers.get();
		for (var key in customHeaders) {
			var customHeader = customHeaders[key];
			requestHeaders[customHeader.name] = customHeader.value;
		}
		return requestHeaders;
	};
});
