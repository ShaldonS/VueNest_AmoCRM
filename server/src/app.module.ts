import { Module } from '@nestjs/common';
import { LeadsController, ContactsController, CompaniesController, amoCRMController } from './app.controller';
import { LeadsService, ContactsService, CompaniesService, amoCRMService } from './app.service';
import { HttpModule  } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LeadsController,ContactsController,CompaniesController, amoCRMController],
  providers: [LeadsService, ContactsService, CompaniesService, amoCRMService]
})

export class AppModule {}