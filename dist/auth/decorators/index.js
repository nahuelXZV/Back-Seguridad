"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccess = exports.RolesAccess = exports.PublicAccess = void 0;
var public_decorator_1 = require("./public.decorator");
Object.defineProperty(exports, "PublicAccess", { enumerable: true, get: function () { return public_decorator_1.PublicAccess; } });
var roles_decorator_1 = require("./roles.decorator");
Object.defineProperty(exports, "RolesAccess", { enumerable: true, get: function () { return roles_decorator_1.RolesAccess; } });
var admin_decorator_1 = require("./admin.decorator");
Object.defineProperty(exports, "AdminAccess", { enumerable: true, get: function () { return admin_decorator_1.AdminAccess; } });
//# sourceMappingURL=index.js.map