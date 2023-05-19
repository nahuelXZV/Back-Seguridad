import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators/modules/global.decorator';
import { HttpCustomService } from './http/http.service';
import { RecoknitionService } from './recoknition/recoknition.service';
import { S3Service } from './s3/s3.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [HttpCustomService, RecoknitionService, S3Service],
  exports: [HttpCustomService, HttpModule, RecoknitionService, S3Service],
})
export class ProvidersModule { }
