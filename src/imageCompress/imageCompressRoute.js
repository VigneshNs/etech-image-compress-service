var imageCompressMgr = require('./imageCompressMgr');


module.exports = function(app) {
     app.route('/compressuploadimage').post(imageCompressMgr.imageCompressAndUpload);
}