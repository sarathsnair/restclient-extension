/**
 * General constants used within the application.
 */
RestClientApp.constant('GENERAL_CONSTANTS', {
	MAX_OBJECT_SIZE: 128000,
	INDENTATION_LEVEL: 2,
	DATE_FORMAT: 'MMM dd, yyyy HH:mm',
	HEADER_KEY_FORMAT: 'yarc.header.',
	HTML_CONTENT_TYPE: 'text/html',
});

/**
 * Request Methods.
 */
RestClientApp.constant('REQUEST_METHODS', ["GET", "POST", "PUT", "DELETE"]);

/**
 * Common headers used to assist the user when entering request headers.
 */
RestClientApp.constant('COMMON_HEADERS', {

	//Some example request headers.
	EXAMPLES: [ {
		id : "accept",
		name : "Accept",
		value : "application/json"
	}, {
		id : "auth",
		name : "Authorization",
		value : "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
	}, {
		id : "cache",
		name : "Cache-Control",
		value : "no-cache"
	}, {
		id : "content",
		name : "Content-Type",
		value : "application/json"
	} ],

	//Common header names.
	NAMES: [
		"Accept",
	  "Accept-Encoding",
	  "Accept-Language",
	  "Authorization",
	  "Cache-Control",
	  "Connection",
	  "Cookie",
	  "Content-Length",
	  "Content-Type",
	  "Date",
	  "From",
	  "Host",
	  "Max-Forwards",
	  "Origin",
	  "Pragma",
	  "Proxy-Authorization",
	  "Referer",
	  "TE",
	  "Upgrade",
	  "Via",
	  "Warning"
	]
});
