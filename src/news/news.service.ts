import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from 'src/entities/news.entity';
import { News } from 'src/interfaces/news.interface';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private newsRepository: Repository<NewsEntity>
    ) {}

    async getAll(): Promise<News[]> {
        return this.newsRepository.find();
    }

    async createNews(createNewsDto: CreateNewsDto): Promise<News> {
        const newNews = this.newsRepository.create(createNewsDto);
        return await this.newsRepository.save(newNews);
    }
}
