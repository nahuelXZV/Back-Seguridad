"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestigoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_testigo_dto_1 = require("./create-testigo.dto");
class UpdateTestigoDto extends (0, mapped_types_1.PartialType)(create_testigo_dto_1.CreateTestigoDto) {
}
exports.UpdateTestigoDto = UpdateTestigoDto;
//# sourceMappingURL=update-testigo.dto.js.map