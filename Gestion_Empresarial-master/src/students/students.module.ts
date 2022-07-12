/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentController } from './student_controller/student.controller';
import { StudentService } from './service/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentsModule {}
