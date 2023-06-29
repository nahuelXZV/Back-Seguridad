"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const common_1 = require("@nestjs/common");
const fileFilter = (req, file, cb) => {
    if (!file)
        return cb(new common_1.BadRequestException('No file uploaded'), false);
    const fileExtension = file.mimetype.split('/')[1];
    const validExtension = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'xml', 'zip', 'rar', '7z'];
    if (!validExtension.includes(fileExtension))
        return cb(new common_1.BadRequestException('Invalid file type'), false);
    cb(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.js.map