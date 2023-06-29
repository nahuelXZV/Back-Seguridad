"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHuellaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_huella_dto_1 = require("./create-huella.dto");
class UpdateHuellaDto extends (0, mapped_types_1.PartialType)(create_huella_dto_1.CreateHuellaDto) {
}
exports.UpdateHuellaDto = UpdateHuellaDto;
//# sourceMappingURL=update-huella.dto.js.map