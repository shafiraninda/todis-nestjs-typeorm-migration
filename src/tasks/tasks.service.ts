import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "src/entity/task.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class TasksService {
    constructor (
        @Inject('TASKS_REPOSITORY')
        private tasksRepository: Repository<Task>,
    ){}

    async getTasks(){
        console.error()
        return this.tasksRepository.find()
    }

    async addTask(task: Task): Promise<InsertResult>{
        return this.tasksRepository.insert(task);
    }

    async editTask(uniqueId: number, task: Task): Promise<Task>{
        const taskToUpdate = await this.tasksRepository.findOne(
            {
                where: {
                    uniqueId: uniqueId
                }
            })
        if(taskToUpdate === undefined){
            throw new NotFoundException();
        }
        await this.tasksRepository.update(uniqueId, task);
        return this.tasksRepository.findOne(
            { 
                where: {uniqueId: uniqueId}
            })
    }

    async deleteTask(uniqueId: number): Promise<DeleteResult>{
        const taskToUpdate = await this.tasksRepository.findOne(
            {
                where: {
                    uniqueId: uniqueId
                }
            })
        if(taskToUpdate === undefined){
            throw new NotFoundException();
        }
        return await this.tasksRepository.delete(uniqueId);
    }
}