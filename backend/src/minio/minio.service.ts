import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private minioClient: Client;
  private bucket: string;

  constructor(private configService: ConfigService) {
    this.minioClient = new Client({
      endPoint: this.configService.get<string>('MINIO_ENDPOINT') || 'localhost',
      port: parseInt(this.configService.get<string>('MINIO_PORT') || '9000', 10),
      useSSL: this.configService.get<string>('MINIO_USE_SSL') === 'true',
      accessKey: this.configService.get<string>('MINIO_ACCESS_KEY'),
      secretKey: this.configService.get<string>('MINIO_SECRET_KEY'),
    });
    this.bucket = this.configService.get<string>('MINIO_BUCKET') || 'local-history';
  }

  async upload(file: Express.Multer.File): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`;
    await this.minioClient.putObject(this.bucket, fileName, file.buffer);
    return `${this.configService.get<string>('MINIO_USE_SSL') === 'true' ? 'https' : 'http'}://${this.configService.get<string>('MINIO_ENDPOINT')}:${this.configService.get<string>('MINIO_PORT')}/${this.bucket}/${fileName}`;
  }
}
