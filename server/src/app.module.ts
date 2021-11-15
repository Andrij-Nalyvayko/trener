import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersModule } from './trainers/trainers.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alena:alena1234@cluster0.et2h8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    TrainersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
