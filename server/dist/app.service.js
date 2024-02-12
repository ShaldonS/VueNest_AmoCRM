"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesService = exports.ContactsService = exports.LeadsService = exports.amoCRMService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let token = {};
let amoCRMService = class amoCRMService {
    constructor() {
        this.axios = axios_1.default;
    }
    async getTokenByQuery() {
        const _token = await this.axios.get('https://test.gnzs.ru/oauth/get-token.php', {
            headers: {
                'X-client-id': 31550986,
                'Content-Type': 'application/json'
            }
        });
        console.log('Token:\n', _token);
        token = _token.data;
        return token;
    }
    getToken() {
        return token;
    }
};
exports.amoCRMService = amoCRMService;
exports.amoCRMService = amoCRMService = __decorate([
    (0, common_1.Injectable)()
], amoCRMService);
let LeadsService = class LeadsService {
    constructor() {
        this.axios = axios_1.default;
        this.leads = [];
    }
    getLeads() {
        return this.leads;
    }
    async createLead(lead) {
        console.log('Lead:\n', lead);
        const _lead = await this.axios.post(`https://${token['base_domain']}/api/v4/leads`, {
            data: lead
        }, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token['access_token'],
            }
        });
        const _leads = _lead.data._embedded.leads;
        let len = Object.keys(_leads).length;
        const lead_id = _leads[len - 1].id;
        lead = {
            'id': lead_id,
            'name': lead.name
        };
        console.log(lead);
        this.leads = [...this.leads, { ...lead }];
        return lead;
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)()
], LeadsService);
let ContactsService = class ContactsService {
    constructor() {
        this.axios = axios_1.default;
        this.contacts = [];
    }
    getContacts() {
        return this.contacts;
    }
    async createContact(contact) {
        console.log('Contact:\n', contact);
        const _contact = await this.axios.post(`https://${token['base_domain']}/api/v4/contacts`, {
            data: contact
        }, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token['access_token'],
            }
        });
        const _contacts = _contact.data._embedded.contacts;
        let len = Object.keys(_contacts).length;
        const cont_id = _contacts[len - 1].id;
        contact = {
            'id': cont_id,
            'name': contact.name
        };
        console.log(contact);
        this.contacts = [...this.contacts, { ...contact }];
        return contact;
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)()
], ContactsService);
let CompaniesService = class CompaniesService {
    constructor() {
        this.axios = axios_1.default;
        this.companies = [];
    }
    getCompanies() {
        return this.companies;
    }
    async createCompany(company) {
        console.log('Company:\n', company);
        const _company = await this.axios.post(`https://${token['base_domain']}/api/v4/companies`, {
            data: company
        }, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token['access_token'],
            }
        });
        const _companies = _company.data._embedded.companies;
        let len = Object.keys(_companies).length;
        const comp_id = _companies[len - 1].id;
        company = {
            'id': comp_id,
            'name': company.name
        };
        console.log(company);
        this.companies = [...this.companies, { ...company }];
        return company;
    }
};
exports.CompaniesService = CompaniesService;
exports.CompaniesService = CompaniesService = __decorate([
    (0, common_1.Injectable)()
], CompaniesService);
//# sourceMappingURL=app.service.js.map