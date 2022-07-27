import { Provider } from "@nestjs/common";
import { Staff } from "src/entity/staff.entity";
import { Connection } from "typeorm";

export const staffsProvider: Provider[] = [
    {
        provide: 'STAFFS_REPOSITORY',
        useFactory: (connection: Connection) => 
            connection.getRepository(Staff),
        inject:  ['DATABASE_CONNECTION'],
    },
];