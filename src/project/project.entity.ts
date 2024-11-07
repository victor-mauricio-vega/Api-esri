import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Enterprise } from '../enterprise/enterprise.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  project_id: string;

  @Column('text')
  description: string;

  @Column({ length: 50 })
  name: string;

  @Column('date')
  start_date: string;

  @Column('date')
  end_date: string;

  @Column({ length: 50 })
  state: string;

  @ManyToOne(() => Enterprise)
  @JoinColumn({ name: 'enterprise_id' })
  enterprise: Enterprise;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
