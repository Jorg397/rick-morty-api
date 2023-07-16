import {
  Column,
  Entity,
  ObjectId as ObjectIDType,
  ObjectIdColumn,
} from 'typeorm'
@Entity('category')
export class Category {
  @ObjectIdColumn()
  _id: ObjectIDType

  @Column()
  name: string
}
