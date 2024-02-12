export declare class amoCRMService {
    private readonly axios;
    getTokenByQuery(): Promise<{}>;
    getToken(): {};
}
export declare class LeadsService {
    private readonly axios;
    leads: any[];
    getLeads(): any[];
    createLead(lead: any): Promise<any>;
}
export declare class ContactsService {
    private readonly axios;
    contacts: any[];
    getContacts(): any[];
    createContact(contact: any): Promise<any>;
}
export declare class CompaniesService {
    private readonly axios;
    companies: any[];
    getCompanies(): any[];
    createCompany(company: any): Promise<any>;
}
