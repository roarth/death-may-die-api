import { Season } from 'src/seasons/orm/season.entity';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Episode extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  name: string;

  @Column()
  title: string;

  @ManyToOne(() => Season, (season) => season.episodes, {
    eager: false,
  })
  @JoinColumn({ name: 'seasonId' })
  season: Season;
}
