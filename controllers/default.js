exports.install = function() {
	ROUTE('+GET /app/*', 'index');
};
