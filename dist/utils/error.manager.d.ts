import { HttpStatus } from "@nestjs/common";
export declare class ErrorManager extends Error {
    statusCode: number;
    constructor({ type, message }: {
        type: keyof typeof HttpStatus;
        message: string;
    });
    static createSignatureError(message: string): void;
}
