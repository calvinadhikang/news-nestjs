import { Injectable } from '@nestjs/common';
import { News } from 'src/interfaces/news.interface';

@Injectable()
export class NewsService {
    constructor() {}

    async getAll(): Promise<News[]> {
        return [
            {
                title: "title",
                subtitle: "subtitle",
                description: "description"
            }
        ];
    }
}
