import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity("student")
export class Student {
  @PrimaryColumn()
  id: number;
  @Column("varchar",{name:"name"})
  name: string;
  @Column()
  phone: number;
  @Column()
  address: string;
}
