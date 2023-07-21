import { Investigator } from 'src/investigators/orm/investigator.entity';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Season extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  name: string;

  @OneToMany(() => Investigator, (investigator) => investigator.season, {
    eager: true,
  })
  investigators: Investigator[];
}
