"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstadioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estadio_dto_1 = require("./create-estadio.dto");
class UpdateEstadioDto extends (0, mapped_types_1.PartialType)(create_estadio_dto_1.CreateEstadioDto) {
}
exports.UpdateEstadioDto = UpdateEstadioDto;
//# sourceMappingURL=update-estadio.dto.js.map