import { Controller, Get, Post, Req  } from '@nestjs/common';
import { HttpService  } from '@nestjs/axios';
import { LeadsService, ContactsService, CompaniesService, amoCRMService } from './app.service';


@Controller('amoCRM')
export class amoCRMController {
  constructor(private amoCRMService: amoCRMService){}

  @Get('/getToken')
  getLeads() {
    return this.amoCRMService.getToken();
  }
  @Get('getTokenByQuery') 
  createLead() {
    return this.amoCRMService.getTokenByQuery();
  }
}

@Controller('leads')
export class LeadsController {
  constructor(private leadsService: LeadsService, private readonly httpService: HttpService){}

  @Get('/get')
  getLeads() {
    return this.leadsService.getLeads();
  }
  @Post('/create') 
  createLead(@Req() req: Request) {
    console.log(req.body)

    // const result = this.httpService.get('https://test.gnzs.ru/oauth/get-token.php', { 
    //   headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    //   'X-Client-Id': 31550986
    //   } 
    // })
    // console.log(result)
    return this.leadsService.createLead(req.body);
  }
}

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get('/get')
  getContacts() {
    return this.contactsService.getContacts();
  }
  @Post('/create')
  createContact(@Req() req: Request) {
    return this.contactsService.createContact(req.body);
  }
}

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get('/get')
  getCompanies() {
    return this.companiesService.getCompanies();
  }
  @Post('/create')
  createCompany(@Req() req: Request) {
    return this.companiesService.createCompany(req.body);
  }
}