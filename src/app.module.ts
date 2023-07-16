import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryModule } from './category/category.module'
import { typeOrmConfig } from './config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
