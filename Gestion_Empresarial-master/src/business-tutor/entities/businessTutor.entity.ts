/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class BusinessTutor {
  @PrimaryColumn()
  id: number;
  @Column("integer",{name:"identification_card"})
  identificationCard: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  address: string;
  @Column("varchar",{name:"institutional_mail"})
  institutionalMail: string;
  @Column("varchar",{name:"personal_mail"})
  personalMail: string;
  @Column("integer",{name:"telephone"})
  telephone: number;
}
