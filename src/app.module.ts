import {  Module } from '@nestjs/common';
import { ProjetModule } from './Projet/projet.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    ProjetModule, 
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal : true,
    }),
    TaskModule,
    
  ],
  controllers: [],
  providers: [TaskService],
})
export class AppModule {

}
