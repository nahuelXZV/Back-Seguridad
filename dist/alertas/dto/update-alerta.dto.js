"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlertaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_alerta_dto_1 = require("./create-alerta.dto");
class UpdateAlertaDto extends (0, swagger_1.PartialType)(create_alerta_dto_1.CreateAlertaDto) {
}
exports.UpdateAlertaDto = UpdateAlertaDto;
//# sourceMappingURL=update-alerta.dto.js.map