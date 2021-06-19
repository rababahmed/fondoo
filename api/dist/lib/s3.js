"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.s3 = void 0;
const aws = __importStar(require("aws-sdk"));
const date_fns_1 = require("date-fns");
const multer = require("multer");
const multerS3 = require("multer-s3");
exports.s3 = new aws.S3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.S3_BUCKET_REGION,
});
const fileFilter = (file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};
const formatFilename = (filename) => {
    const date = date_fns_1.format(new Date(), "yyyyMMdd");
    const randomString = Math.random().toString(36).substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9.]/g, "-");
    const newFilename = `${date}-${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
};
exports.upload = multer({
    fileFilter,
    storage: multerS3({
        acl: "public-read",
        s3: exports.s3,
        bucket: "tezzbites",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (file, cb) {
            cb(null, { fieldName: file.fieldname, originalName: file.originalname });
        },
        key: async function (req, file, cb) {
            cb(null, `${req.params.id}/${formatFilename(file.originalname)}`);
        },
    }),
});
//# sourceMappingURL=s3.js.map