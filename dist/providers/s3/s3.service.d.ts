/// <reference types="multer" />
export declare class S3Service {
    private AWS_S3_BUCKET;
    private s3;
    uploadFile(file: Express.Multer.File, name?: string): Promise<any>;
    private s3_upload;
    getUsuariosImages(): Promise<string[]>;
    deleteTempFile(targetName: string): Promise<any>;
}
