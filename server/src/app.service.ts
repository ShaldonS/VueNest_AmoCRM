import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

let token = {}
@Injectable()
export class amoCRMService {
  private readonly axios: AxiosInstance = axios;

  async getTokenByQuery() {
    const _token = await this.axios.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      {
        headers:
        {
          'X-client-id': CLIENT-ID,
          'Content-Type': 'application/json'
        }
      }
    )
    console.log('Token:\n', _token)
    token = _token.data 
    return token;
  }

  getToken() {
    return token;
  }
}

@Injectable()
export class LeadsService {
  private readonly axios: AxiosInstance = axios;
  leads = [];

  getLeads() {
    return this.leads;
  }

  async createLead(lead) {
    console.log('Lead:\n', lead)
    const _lead = await this.axios.post(
      `https://${token['base_domain']}/api/v4/leads`,
      {
        data: lead
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+token['access_token'],
        }
      }
    )
    const _leads=_lead.data._embedded.leads
    let len = Object.keys(_leads).length
    const lead_id=_leads[len-1].id

    lead={
      'id': lead_id,
      'name': lead.name
    }
    console.log(lead)
    this.leads = [...this.leads, {...lead}];
    return lead;
  }
}

@Injectable()
export class ContactsService {
  private readonly axios: AxiosInstance = axios;
  contacts = [];

  getContacts() {
    return this.contacts;
  }

  async createContact(contact) {
    console.log('Contact:\n', contact)
    const _contact = await this.axios.post(
      `https://${token['base_domain']}/api/v4/contacts`,
      {
        data: contact
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+token['access_token'],
        }
      }
    )
    const _contacts=_contact.data._embedded.contacts
    let len = Object.keys(_contacts).length
    const cont_id=_contacts[len-1].id

    contact={
      'id': cont_id,
      'name': contact.name
    }
    console.log(contact)
    this.contacts = [...this.contacts, {...contact}];
    return contact;
  }
}

@Injectable()
export class CompaniesService {
  private readonly axios: AxiosInstance = axios;
  companies = [];

  getCompanies() {
    return this.companies;
  }

  async createCompany(company) {
    console.log('Company:\n', company)
    const _company = await this.axios.post(
      `https://${token['base_domain']}/api/v4/companies`,
      {
        data: company
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+token['access_token'],
        }
      }
    )
    const _companies=_company.data._embedded.companies
    let len = Object.keys(_companies).length
    const comp_id=_companies[len-1].id

    company={
      'id': comp_id,
      'name': company.name
    }
    console.log(company)
    this.companies = [...this.companies, {...company}];
    return company;
  }
}
