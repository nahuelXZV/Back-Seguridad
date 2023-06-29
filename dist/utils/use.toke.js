"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
const jwt = require("jsonwebtoken");
const useToken = (token) => {
    try {
        const decode = jwt.decode(token);
        const currentDate = new Date();
        const expiresDate = new Date(decode.exp);
        const isExpired = +expiresDate <= +currentDate / 1000;
        return {
            role: decode.role,
            sub: decode.sub,
            isExpired
        };
    }
    catch (error) {
        return 'El token no es valido';
    }
};
exports.useToken = useToken;
//# sourceMappingURL=use.toke.js.map