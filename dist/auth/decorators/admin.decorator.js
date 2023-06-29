"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccess = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../constants");
const AdminAccess = () => (0, common_1.SetMetadata)(constants_1.ADMIN_KEY, constants_1.ROLES.ADMINISTRADOR);
exports.AdminAccess = AdminAccess;
//# sourceMappingURL=admin.decorator.js.map