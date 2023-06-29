"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOTOS = exports.HUELLAS = exports.SEXO = exports.ROLES_KEY = exports.ADMIN_KEY = exports.PUBLIC_KEY = exports.ROLES = exports.CORS_OPTIONS = void 0;
var cors_1 = require("./cors");
Object.defineProperty(exports, "CORS_OPTIONS", { enumerable: true, get: function () { return cors_1.CORS_OPTIONS; } });
var roles_1 = require("./roles");
Object.defineProperty(exports, "ROLES", { enumerable: true, get: function () { return roles_1.ROLES; } });
var key_decorators_1 = require("./key-decorators");
Object.defineProperty(exports, "PUBLIC_KEY", { enumerable: true, get: function () { return key_decorators_1.PUBLIC_KEY; } });
Object.defineProperty(exports, "ADMIN_KEY", { enumerable: true, get: function () { return key_decorators_1.ADMIN_KEY; } });
Object.defineProperty(exports, "ROLES_KEY", { enumerable: true, get: function () { return key_decorators_1.ROLES_KEY; } });
var sexo_1 = require("./sexo");
Object.defineProperty(exports, "SEXO", { enumerable: true, get: function () { return sexo_1.SEXO; } });
var huellas_1 = require("./huellas");
Object.defineProperty(exports, "HUELLAS", { enumerable: true, get: function () { return huellas_1.HUELLAS; } });
var fotos_1 = require("./fotos");
Object.defineProperty(exports, "FOTOS", { enumerable: true, get: function () { return fotos_1.FOTOS; } });
//# sourceMappingURL=index.js.map