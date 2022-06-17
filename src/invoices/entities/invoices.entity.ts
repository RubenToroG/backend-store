import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { User } from 'src/users/entities/users.entity';
import { InvoiceProduct } from './invoice-product.entity';
import { Customer } from 'src/users/entities/customer.entity';

@Entity({ name: 'invoices' })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, unique: true })
  number: string;

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

  @OneToMany(() => InvoiceProduct, (item) => item.invoice)
  product: InvoiceProduct[];

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => User, (user) => user.invoice)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
