import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.101.187.72',
      port: 3306,
      username: 'root',
      password: '',
      database: 'news',
      entities: [NewsEntity],
      synchronize: true
    }),
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
