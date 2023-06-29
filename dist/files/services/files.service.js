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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const infractor_service_1 = require("../../infractor/services/infractor.service");
const s3_service_1 = require("../../providers/s3/s3.service");
let FilesService = class FilesService {
    constructor(infractorService, s3Service) {
        this.infractorService = infractorService;
        this.s3Service = s3Service;
    }
    async uploadFile(fotos, id) {
        try {
            const infractor = await this.infractorService.findOne(id);
            if (!infractor)
                throw new common_1.BadRequestException('El infractor no existe');
            const dataFiles = [];
            await Promise.all(fotos.map(async (foto) => {
                const originalname = foto.originalname.split('.')[0];
                const fileName = `${originalname}_${id}`;
                const path = await this.s3Service.uploadFile(foto, "usuarios/" + fileName);
                const data = {
                    dir: path.Location,
                    name: fileName,
                };
                dataFiles.push(data);
            }));
            return await this.infractorService.uploadFile(dataFiles, id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [infractor_service_1.InfractorService,
        s3_service_1.S3Service])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map