var imageCompressDA = require('./imageCompressDA');

exports.imageCompressAndUpload = function(req, res) {
    try {
        imageCompressDA.imageCompressAndUpload(req, res);
    } catch (error) {
        console.log(error)
    }
}