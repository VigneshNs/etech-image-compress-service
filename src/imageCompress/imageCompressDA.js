var sharp = require('sharp');
var env = require('./../config/s3.env');
var s3 = require('./../config/s3.config');
const url = require('url'); 
  

exports.imageCompressAndUpload = function (req, res) {
    const bufferBase64 = Buffer.from(req.body.imageBase64, 'base64');
    var requiredFormat = 'webp';
    sharp(bufferBase64).metadata()
    .then(function(metadata) {
      if(metadata.height > req.body.height && metadata.width > req.body.width )     {   
      sharp(bufferBase64).resize(req.body.width, req.body.height, { fit: sharp.fit.inside })
      .webp({ quality: 80, alphaQuality: 80, lossless: false, reductionEffort: 6, force: false })
      .toFormat(requiredFormat)
      .toBuffer()
      .then(buffer => {
          uploadToS3(req, res, buffer);
          });   
      } else {
        res.status(200).json({result: "Require Size Not Support"});
      }
    });
}
function uploadToS3(req, res, compressImage) {
    let urlObject = url.parse(req.body.imagePath);
    let urlPath = decodeURIComponent(urlObject.pathname)
    var requiredFormat = 'webp';
    const params = {
        Bucket: env.bucketName + urlPath,
        Key: req.body.imageName,
        ACL: 'public-read',
        ContentType: 'image/' + requiredFormat,
        Body: compressImage
      };

      s3.upload(params, function (err, data) {
        if (err) {
          console.log(err)
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
      });
    }
