import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    uniqueId: number;

    @Column()
    name: string;
}