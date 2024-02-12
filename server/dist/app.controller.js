"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesController = exports.ContactsController = exports.LeadsController = exports.amoCRMController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const app_service_1 = require("./app.service");
let amoCRMController = class amoCRMController {
    constructor(amoCRMService) {
        this.amoCRMService = amoCRMService;
    }
    getLeads() {
        return this.amoCRMService.getToken();
    }
    createLead() {
        return this.amoCRMService.getTokenByQuery();
    }
};
exports.amoCRMController = amoCRMController;
__decorate([
    (0, common_1.Get)('/getToken'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], amoCRMController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Get)('getTokenByQuery'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], amoCRMController.prototype, "createLead", null);
exports.amoCRMController = amoCRMController = __decorate([
    (0, common_1.Controller)('amoCRM'),
    __metadata("design:paramtypes", [app_service_1.amoCRMService])
], amoCRMController);
let LeadsController = class LeadsController {
    constructor(leadsService, httpService) {
        this.leadsService = leadsService;
        this.httpService = httpService;
    }
    getLeads() {
        return this.leadsService.getLeads();
    }
    createLead(req) {
        console.log(req.body);
        return this.leadsService.createLead(req.body);
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "createLead", null);
exports.LeadsController = LeadsController = __decorate([
    (0, common_1.Controller)('leads'),
    __metadata("design:paramtypes", [app_service_1.LeadsService, axios_1.HttpService])
], LeadsController);
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    getContacts() {
        return this.contactsService.getContacts();
    }
    createContact(req) {
        return this.contactsService.createContact(req.body);
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "getContacts", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "createContact", null);
exports.ContactsController = ContactsController = __decorate([
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [app_service_1.ContactsService])
], ContactsController);
let CompaniesController = class CompaniesController {
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    getCompanies() {
        return this.companiesService.getCompanies();
    }
    createCompany(req) {
        return this.companiesService.createCompany(req.body);
    }
};
exports.CompaniesController = CompaniesController;
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompaniesController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], CompaniesController.prototype, "createCompany", null);
exports.CompaniesController = CompaniesController = __decorate([
    (0, common_1.Controller)('companies'),
    __metadata("design:paramtypes", [app_service_1.CompaniesService])
], CompaniesController);
//# sourceMappingURL=app.controller.js.map