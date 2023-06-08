import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FileEntity } from '../files/entities/file.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FileEntity],
  imports: [TypeOrmModule.forFeature([UserEntity, FileEntity])],
  exports: [UsersService],
})
export class UsersModule {}
