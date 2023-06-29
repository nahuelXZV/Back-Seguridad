import { HttpService } from '@nestjs/axios/dist';
export declare class HttpCustomService {
    private readonly httpService;
    constructor(httpService: HttpService);
    apiGetAll(url: string): Promise<any>;
}
