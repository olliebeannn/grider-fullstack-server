const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	// Route to test auth flow
	app.get('/api/currentUser', (req, res) => {
		res.send(req.user);
	});

	// Log out route
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
};
