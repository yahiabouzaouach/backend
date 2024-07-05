import { Module } from '@nestjs/common';
import { ProjetController } from './projet.controller';
import { PrismaService } from 'src/prisma/prisma.service';

import { ProjetService } from './projet.service';

@Module({
  controllers: [ProjetController],
  providers: [ProjetService,PrismaService]
})
export class ProjetModule {}
