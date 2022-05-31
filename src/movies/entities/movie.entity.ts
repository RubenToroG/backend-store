import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  title: string;

  @Column({ type: 'varchar' })
  original_title: string;

  @Column({ type: 'int' })
  release_year: number;

  @Column({ type: 'varchar' })
  wiki_link: string;

  @Column({ type: 'varchar' })
  music: string;

  @Column({ type: 'varchar' })
  duration: string;

  @Column({ type: 'varchar' })
  cover: string;

  @Column({ type: 'varchar' })
  banner: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  trailer: string;

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
}
