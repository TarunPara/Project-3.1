const serviceAccount = require("../config/service-key.json");
const multerS3 = require("multer-s3");
const multer = require("multer");
const aws = require("aws-sdk");

aws.config.update({
  secretAccessKey: serviceAccount["access-secret"],
  accessKeyId: serviceAccount["access-key"],
  region: serviceAccount.region,
  signatureVersion: "v4",
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: serviceAccount["bucket-name"],
    key: function (req, file, cb) {
      cb(null, Date.now() + file.originalname); //use Date.now() for unique file keys
    },
  }),
});

const getFileStream = (fileKey) => {
  const donwloadParams = {
    Key: fileKey,
    Bucket: serviceAccount["bucket-name"],
  };

  return s3.getObject(donwloadParams).createReadStream();
};

module.exports = { upload, getFileStream };
