/**
 * Various helper functions for the custom request headers functionality.
 */
RestClientApp.service('headers', function(GENERAL_CONSTANTS, COMMON_HEADERS, utils) {
	var helper = this;
	var headers = {};

	helper.get = function() {
		return headers;
	};

	helper.set = function(value) {
		utils.emptyObject(headers);
		angular.extend(headers, value);
	};

	/**
	 * Add the specified group name to each header object and generate a label used to display them.
	 */
	helper.prepareHeadersForDisplay = function(headers, group) {
		for (var header of headers) {
			helper.prepareHeaderForDisplay(header, group);
		}
		return headers;
	};
	
	/**
	 * Ensure that the specified key is in the correct format for a key used to store header objects.
	 */
	helper.isHeaderKey = function(key) {
		if (key.indexOf(GENERAL_CONSTANTS.HEADER_KEY_FORMAT) > -1) {
			return true;
		}
	};
});
