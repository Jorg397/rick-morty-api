import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.DB_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  database: 'db_rickMorty',
  entities: [__dirname + '/../**/*.entity.js'],
}
