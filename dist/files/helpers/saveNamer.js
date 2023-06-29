"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNamer = void 0;
const common_1 = require("@nestjs/common");
const fileNamer = (req, file, cb) => {
    console.log('fileNamer', req.query);
    if (!file)
        return cb(new common_1.BadRequestException('No file uploaded'), false);
    if (!req.query.infractor_id)
        return cb(new common_1.BadRequestException('No hay el id del infractor.'), false);
    const id = req.query.infractor_id;
    const fileExtension = file.mimetype.split('/')[1];
    const originalname = file.originalname.split('.')[0];
    const fileName = `${id}_${originalname}.${fileExtension}`;
    cb(null, fileName);
};
exports.fileNamer = fileNamer;
//# sourceMappingURL=saveNamer.js.map