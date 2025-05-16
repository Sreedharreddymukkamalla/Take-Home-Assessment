import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  birthday: string;

  @Column({ type: 'enum', enum: ['Checking', 'Savings'] })
  accountType: 'Checking' | 'Savings';

  @Column()
  accountNumber: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  balance: number;
  
  @Column({ default: '$' })
  currency: string;
}
