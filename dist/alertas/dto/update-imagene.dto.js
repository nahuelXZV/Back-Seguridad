"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageneDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_imagene_dto_1 = require("./create-imagene.dto");
class UpdateImageneDto extends (0, swagger_1.PartialType)(create_imagene_dto_1.CreateImageneDto) {
}
exports.UpdateImageneDto = UpdateImageneDto;
//# sourceMappingURL=update-imagene.dto.js.map