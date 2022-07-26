import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn } from "typeorm";
import { Staff } from "./staff";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    uniqueId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToOne(()=> Staff)
    @JoinColumn()
    assignee: Staff;
}