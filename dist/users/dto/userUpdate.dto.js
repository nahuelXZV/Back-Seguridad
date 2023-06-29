"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_dto_1 = require("./user.dto");
class UserUpdateDTO extends (0, mapped_types_1.PartialType)(user_dto_1.UserDTO) {
}
exports.UserUpdateDTO = UserUpdateDTO;
//# sourceMappingURL=userUpdate.dto.js.map