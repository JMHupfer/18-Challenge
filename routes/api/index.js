const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

route.use('./thoughts', thoughtRoutes);
route.use('./users', userRoutes);

module.exports = router;
