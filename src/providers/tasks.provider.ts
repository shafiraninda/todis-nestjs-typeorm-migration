import { Provider } from "@nestjs/common";
import { Task } from "src/entity/task.entity";
import { Connection } from "typeorm";

export const tasksProvider: Provider[]=[
    {
        provide: 'TASKS_REPOSITORY',
        useFactory: (connection: Connection) => 
            connection.getRepository(Task),
        inject: ['DATABASE_CONNECTION']
    }
]