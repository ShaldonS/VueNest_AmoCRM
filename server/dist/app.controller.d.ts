import { HttpService } from '@nestjs/axios';
import { LeadsService, ContactsService, CompaniesService, amoCRMService } from './app.service';
export declare class amoCRMController {
    private amoCRMService;
    constructor(amoCRMService: amoCRMService);
    getLeads(): {};
    createLead(): Promise<{}>;
}
export declare class LeadsController {
    private leadsService;
    private readonly httpService;
    constructor(leadsService: LeadsService, httpService: HttpService);
    getLeads(): any[];
    createLead(req: Request): Promise<any>;
}
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    getContacts(): any[];
    createContact(req: Request): Promise<any>;
}
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    getCompanies(): any[];
    createCompany(req: Request): Promise<any>;
}
