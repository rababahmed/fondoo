import * as aws from "aws-sdk";
import { format } from "date-fns";
const multer = require("multer");
const multerS3 = require("multer-s3");

export const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const formatFilename = (filename: any) => {
  const date = format(new Date(), "yyyyMMdd");
  const randomString = Math.random().toString(36).substring(2, 7);
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9.]/g, "-");
  const newFilename = `${date}-${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};

export const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: "tezzbites",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req: any, file: any, cb: any) {
      cb(null, { fieldName: file.fieldname, originalName: file.originalname });
    },
    key: function (req: any, file: any, cb: any) {
      cb(null, `${req.params.id}/${formatFilename(file.originalname)}`);
    },
  }),
});
