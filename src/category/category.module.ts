import { Module } from '@nestjs/common'
import { CharactersApiService } from 'src/rick-morty/services'
import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CharactersApiService],
})
export class CategoryModule {}
