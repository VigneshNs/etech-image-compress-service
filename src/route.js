var imageCompressRoute = require('./imageCompress/imageCompressRoute');

exports.loadRoutes = function (app) {
    imageCompressRoute(app);
};

