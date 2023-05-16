import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InfractorModule } from './infractor/infractor.module';
import { ProvidersModule } from './providers/providers.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }), // comando para crear las migraciones [npm run m:gen -- ./src/migrations/init]
    UsersModule,
    AuthModule,
    InfractorModule,
    ProvidersModule,
    FilesModule,
  ],
  controllers: []
})
export class AppModule { }
