import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

let connectUrl = process.env.NATS_SERVER_HOST?  process.env.NATS_SERVER_HOST : 'nats://localhost:4222'
console.log(`connectUrl:${connectUrl}`)

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        url: connectUrl,
      },
    },
  );
  app.listen();
}
bootstrap();
