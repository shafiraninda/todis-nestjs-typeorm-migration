import { Staff } from "src/entity/staff.entity"
import { Task } from "src/entity/task.entity";
import { createConnection } from "typeorm";

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async ()=> 
            await createConnection ({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                entities: [Staff, Task],
                migrations: ["../../dist/src/migrations/*.{js,ts}"],
                synchronize: true,
                // cli.migrationsDir: '../migration'
            })
        ,
    }
]