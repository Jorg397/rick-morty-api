import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ObjectId } from 'mongodb'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { Category } from './entities/category.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = await this.categoryRepository.save(
      this.categoryRepository.create(createCategoryDto),
    )

    return createdCategory
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find()
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    })

    if (!category) {
      throw new NotFoundException()
    }

    return category
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    await this.categoryRepository.update(id, {
      name: updateCategoryDto.name,
    })

    const category = await this.findOne(id)

    if (!category) {
      throw new NotFoundException()
    }

    return category
  }
}
