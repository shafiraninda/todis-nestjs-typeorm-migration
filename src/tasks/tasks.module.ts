import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { tasksProvider } from "src/providers/tasks.provider";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
    imports: [DatabaseModule],
    controllers: [TasksController],
    providers: [ ...tasksProvider, TasksService]
})

export class tasksModule {}