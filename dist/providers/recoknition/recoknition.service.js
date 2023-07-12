"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoknitionService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const s3_service_1 = require("../s3/s3.service");
let RecoknitionService = class RecoknitionService {
    constructor(s3Service) {
        this.s3Service = s3Service;
        this.rekognition = new AWS.Rekognition({ region: 'us-east-2', apiVersion: '2016-06-27', credentials: { accessKeyId: process.env.AWS_S3_ACCESS_KEY, secretAccessKey: process.env.AWS_S3_KEY_SECRET } });
    }
    async searchEventosUsuariosFaces(foto) {
        const usuariosImages = await this.s3Service.getUsuariosImages();
        console.log(usuariosImages);
        const matchedImages = await this.compareEventosUsuariosFaces(foto, usuariosImages);
        return matchedImages;
    }
    async compareEventosUsuariosFaces(foto, usuariosImages) {
        const matchedImages = [];
        const file = await this.uploadTempFile(foto);
        console.log(file);
        for (const usuariosImage of usuariosImages) {
            const similarity = await this.compareFaces(file.key, usuariosImage);
            console.log(similarity);
            if (similarity >= 80) {
                matchedImages.push(usuariosImage);
            }
        }
        await this.s3Service.deleteTempFile(file.key);
        return matchedImages;
    }
    async compareFaces(sourceImage, targetImage) {
        var _a;
        const params = {
            SourceImage: {
                S3Object: {
                    Bucket: process.env.AWS_S3_BUCKET,
                    Name: sourceImage,
                },
            },
            TargetImage: {
                S3Object: {
                    Bucket: process.env.AWS_S3_BUCKET,
                    Name: targetImage,
                },
            },
            SimilarityThreshold: 80,
        };
        try {
            const result = await this.rekognition.compareFaces(params).promise();
            return ((_a = result === null || result === void 0 ? void 0 : result.FaceMatches[0]) === null || _a === void 0 ? void 0 : _a.Similarity) || 0;
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }
    async uploadTempFile(foto) {
        const path = await this.s3Service.uploadFile(foto, "temporal/" + foto.originalname);
        return {
            key: path.key,
            location: path.Location
        };
    }
    async deleteTempFile(key) {
        await this.s3Service.deleteTempFile(key);
    }
};
RecoknitionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_service_1.S3Service])
], RecoknitionService);
exports.RecoknitionService = RecoknitionService;
//# sourceMappingURL=recoknition.service.js.map