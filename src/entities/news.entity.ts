import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    detail: string;

    @Column()
    author: string;

    @Column()
    image: string;
}