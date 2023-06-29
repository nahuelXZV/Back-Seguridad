"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInfractorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_infractor_dto_1 = require("./create-infractor.dto");
class UpdateInfractorDto extends (0, mapped_types_1.PartialType)(create_infractor_dto_1.CreateInfractorDto) {
}
exports.UpdateInfractorDto = UpdateInfractorDto;
//# sourceMappingURL=update-infractor.dto.js.map