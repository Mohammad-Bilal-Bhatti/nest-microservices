import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

let connectUrl = process.env.NATS_SERVER_HOST?  process.env.NATS_SERVER_HOST : 'nats://localhost:4222'
console.log(`connectUrl:${connectUrl}`)

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVER',
        transport: Transport.NATS,
        options: {
          servers: [connectUrl],
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
