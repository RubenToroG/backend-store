import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';

import { Category } from './category.entity';
// import { InvoiceItem } from 'src/invoices/entities/invoice-product.entity';

@Entity({ name: 'products' })
@Index(['price', 'stock'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Index()
  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToMany(() => Category, (category) => category.products, {
    nullable: true,
  })
  @JoinTable({
    name: 'products_categories',
    joinColumn: {
      name: 'product_id',
    },
    inverseJoinColumn: {
      name: 'category_id',
    },
  })
  categories: Category[];

  // @OneToMany(() => InvoiceItem, (invoice) => invoice.quantity)
  // invoice_product: InvoiceItem[];
}
