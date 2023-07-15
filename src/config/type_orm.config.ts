import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.DB_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
}
