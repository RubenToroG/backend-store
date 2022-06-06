import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { User } from 'src/users/entities/users.entity';
// import { Product } from 'src/products/entities/product.entity';
import { InvoiceItems } from './invoice-product.entity';
import { Customer } from 'src/users/entities/customer.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.invoice)
  user: User;

  @Column({ type: 'varchar', length: 10, unique: true })
  number: string;

  @Column({ type: 'varchar', length: 100 })
  concept: string;

  @Column({ type: 'int' })
  price: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @OneToMany(() => InvoiceItems, (item) => item.invoice)
  items: InvoiceItems[];

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  customer: Customer;
}

// @ManyToMany(() => Product, (product) => product.invoice)
// @JoinTable()
// products: Product[];
