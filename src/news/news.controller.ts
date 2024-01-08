import { CreateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    getNews(){
        return this.newsService.getAll();
    }

    @Post()
    async createNews(@Body() createNewsDto: CreateNewsDto) {
        const newNews = await this.newsService.createNews(createNewsDto);
        return {
            news: newNews
        }
    }
}
