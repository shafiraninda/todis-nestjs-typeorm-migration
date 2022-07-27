import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn, Generated } from "typeorm";
import { Staff } from "./staff.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    @Generated("increment")
    uniqueId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToOne(()=> Staff, (assignee)=> assignee.task, { eager:true })
    @JoinColumn({name: 'assignee_id'})
    assignee: Staff;

    @Column({name: 'assignee_id'})
    assigneeUniqueId: number;
}