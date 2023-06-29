"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFotoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_foto_dto_1 = require("./create-foto.dto");
class UpdateFotoDto extends (0, mapped_types_1.PartialType)(create_foto_dto_1.CreateFotoDto) {
}
exports.UpdateFotoDto = UpdateFotoDto;
//# sourceMappingURL=update-foto.dto.js.map