import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'petrorom_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}

export default config;