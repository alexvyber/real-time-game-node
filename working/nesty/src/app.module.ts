import { Module } from "@nestjs/common";
import { EventsModule } from "./events/events.module";
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [EventsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
