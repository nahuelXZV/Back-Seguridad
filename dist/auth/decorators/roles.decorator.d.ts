import { ROLES } from "src/constants";
export declare const RolesAccess: (...roles: Array<keyof typeof ROLES>) => import("@nestjs/common").CustomDecorator<string>;
