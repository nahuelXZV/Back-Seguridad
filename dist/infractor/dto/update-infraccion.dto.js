"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInfraccionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_infraccion_dto_1 = require("./create-infraccion.dto");
class UpdateInfraccionDto extends (0, mapped_types_1.PartialType)(create_infraccion_dto_1.CreateInfraccionDto) {
}
exports.UpdateInfraccionDto = UpdateInfraccionDto;
//# sourceMappingURL=update-infraccion.dto.js.map