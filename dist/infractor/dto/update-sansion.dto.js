"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSansionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sansion_dto_1 = require("./create-sansion.dto");
class UpdateSansionDto extends (0, mapped_types_1.PartialType)(create_sansion_dto_1.CreateSansionDto) {
}
exports.UpdateSansionDto = UpdateSansionDto;
//# sourceMappingURL=update-sansion.dto.js.map