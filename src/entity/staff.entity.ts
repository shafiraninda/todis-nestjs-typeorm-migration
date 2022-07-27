import { Column, Entity, Generated, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    @Generated("increment")
    uniqueId: number;

    @Column()
    name: string;

    @OneToOne(()=> Task, (task)=> task.assignee)
    task: Task
}