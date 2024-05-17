const router = require('express').Router();
const userRoutes = require('./user-routes');
//const bookRoutes = require('./book-routes'); // Another example if you have book routes

router.use('/users', userRoutes);
//router.use('/books', bookRoutes); // Another example if you have book routes

module.exports = router;
