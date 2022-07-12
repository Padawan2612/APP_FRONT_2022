/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessTutorController } from './controllers/business-tutor.controller';

import { BusinessTutor } from './entities/businessTutor.entity';
import { BusinessTutorService } from './services/business-tutor.service';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessTutor])],
  controllers: [BusinessTutorController],
  providers: [BusinessTutorService],
})
export class BusinessTutorModule {}
