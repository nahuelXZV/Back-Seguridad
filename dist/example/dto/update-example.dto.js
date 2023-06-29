"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExampleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_example_dto_1 = require("./create-example.dto");
class UpdateExampleDto extends (0, mapped_types_1.PartialType)(create_example_dto_1.CreateExampleDto) {
}
exports.UpdateExampleDto = UpdateExampleDto;
//# sourceMappingURL=update-example.dto.js.map