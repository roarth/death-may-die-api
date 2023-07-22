import { Season } from 'src/seasons/orm/season.entity';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Investigator extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @ManyToOne(() => Season, (season) => season.investigators, {
    eager: false,
  })
  @JoinColumn({ name: 'seasonId' })
  season: Season;

  @Column()
  punchline: string;

  @Column()
  home: string;

  @Column()
  background: string;
}
