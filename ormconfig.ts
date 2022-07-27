// import { createConnection } from "net";

import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'todis_task',
    entities: ["dist/src/entity/*.entity.js"],
    migrations: ["dist/src/migration/*.{js,ts}"],
    synchronize: false,
    cli: {
        migrationsDir: 'src/migration'
    }
}

export default config;