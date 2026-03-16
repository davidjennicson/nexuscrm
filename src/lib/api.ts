// ─── CRM Types ─────────────────────────────────────────────────────────────

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  gender?: string;
  address?: string;
  companyName?: string;
  industry?: string;
  companySize?: string;
  role?: string;
  setupCompleted?: boolean;
  provider?: string;
  createdAt?: string;
  roles?: { name: string }[];
}

export type ContactStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";
export type ContactType = "INDIVIDUAL" | "COMPANY_REPRESENTATIVE";

export interface ContactDto {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  address?: string;
  notes?: string;
  status?: ContactStatus;
  type?: ContactType;
  companyId?: string;
  companyName?: string;
  ownerId?: string;
  ownerName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CompanyDto {
  id?: string;
  name: string;
  website?: string;
  industry?: string;
  size?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "NEGOTIATION" | "WON" | "LOST";
export type LeadSource = "WEBSITE" | "REFERRAL" | "SOCIAL_MEDIA" | "EMAIL_CAMPAIGN" | "COLD_CALL" | "TRADE_SHOW" | "OTHER";

export interface LeadDto {
  id?: string;
  title: string;
  description?: string;
  value?: number;
  status?: LeadStatus;
  source?: LeadSource;
  expectedCloseDate?: string;
  notes?: string;
  contactId?: string;
  contactName?: string;
  assignedToId?: string;
  assignedToName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AnalyticsDto {
  totalContacts: number;
  activeContacts: number;
  inactiveContacts: number;
  totalLeads: number;
  newLeads: number;
  wonLeads: number;
  lostLeads: number;
  openLeads: number;
  totalPipelineValue: number;
  totalWonValue: number;
  conversionRate: number;
  leadsByStatus: Record<string, number>;
  leadsBySource: Record<string, number>;
  contactsByStatus: Record<string, number>;
  totalUsers: number;
}

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export interface TaskDto {
  id?: string;
  title: string;
  description?: string;
  dueDate?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  assignedToId?: string;
  assignedToName?: string;
  leadId?: string;
  leadTitle?: string;
  teamId?: string;
  teamName?: string;
  createdById?: string;
  createdByName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TeamDto {
  id?: string;
  name: string;
  description?: string;
  ownerId?: string;
  ownerName?: string;
  memberIds?: string[];
  memberNames?: string[];
  createdAt?: string;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}


// ─── Dummy Data Initialization ──────────────────────────────────────────────

const delay = <T>(ms: number, value: T): Promise<T> => new Promise(resolve => setTimeout(() => resolve(value), ms));

const initialUser: UserProfile = {
  id: "demo-user-1",
  name: "Demo Admin",
  email: "admin@crm.io",
  setupCompleted: true,
  role: "ADMIN"
};

const initialLeads: LeadDto[] = [
  { id: "1", title: "Enterprise License Expansion", value: 120000, status: "WON", contactName: "Acme Corp", createdAt: new Date().toISOString() },
  { id: "2", title: "New Q3 Contract", value: 45000, status: "NEGOTIATION", contactName: "Beta Solutions", createdAt: new Date().toISOString() },
  { id: "3", title: "Cloud Migration Project", value: 85000, status: "PROPOSAL", contactName: "Omega Inc", createdAt: new Date().toISOString() },
  { id: "4", title: "Consulting Retainer", value: 20000, status: "NEW", contactName: "Startup Hub", createdAt: new Date().toISOString() },
];

const initialContacts: ContactDto[] = [
  { id: "1", firstName: "Jane", lastName: "Doe", email: "jane@acme.com", jobTitle: "CEO", companyName: "Acme Corp", status: "ACTIVE" },
  { id: "2", firstName: "John", lastName: "Smith", email: "john@beta.com", jobTitle: "CTO", companyName: "Beta Solutions", status: "ACTIVE" },
  { id: "3", firstName: "Alice", lastName: "Johnson", email: "alice@omega.com", jobTitle: "Director", companyName: "Omega Inc", status: "ACTIVE" },
];

const initialCompanies: CompanyDto[] = [
  { id: "1", name: "Acme Corp", industry: "Technology", website: "acme.com" },
  { id: "2", name: "Beta Solutions", industry: "Consulting", website: "beta.com" },
  { id: "3", name: "Omega Inc", industry: "Finance", website: "omega.com" },
];

const initialTasks: TaskDto[] = [
  { id: "1", title: "Call Jane Doe regarding contract", status: "PENDING", priority: "HIGH", dueDate: new Date().toISOString() },
  { id: "2", title: "Prepare Q3 proposal", status: "IN_PROGRESS", priority: "MEDIUM", dueDate: new Date().toISOString() },
  { id: "3", title: "Review Omega requirements", status: "COMPLETED", priority: "LOW", dueDate: new Date().toISOString() },
];

const initialTeams: TeamDto[] = [
  { id: "1", name: "Enterprise Sales", description: "Handles enterprise accounts" },
  { id: "2", name: "SMB Sales", description: "Handles small to medium businesses" },
];

// LocalStorage helpers
function getLS<T>(key: string, fallback: T): T {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : fallback;
}
function setLS(key: string, val: any) {
  localStorage.setItem(key, JSON.stringify(val));
}

if (!localStorage.getItem("crm_init")) {
  setLS("crm_contacts", initialContacts);
  setLS("crm_companies", initialCompanies);
  setLS("crm_leads", initialLeads);
  setLS("crm_tasks", initialTasks);
  setLS("crm_teams", initialTeams);
  localStorage.setItem("crm_init", "1");
}

function pageify<T>(items: T[]): Page<T> {
  return { content: items, number: 0, size: items.length, totalElements: items.length, totalPages: 1 };
}

// ─── MOCK APIs ─────────────────────────────────────────────────────────────

export const authApi = {
  async login(_data: any): Promise<AuthResponse> { return delay(500, { accessToken: "mock-token", refreshToken: "mock-refresh" }); },
  async register(_data: any): Promise<UserProfile> { return delay(500, initialUser); },
  async logout(): Promise<void> { return delay(300, undefined); },
  async refreshToken(): Promise<AuthResponse> { return delay(100, { accessToken: "mock-token", refreshToken: "mock-refresh" }); },
};

export const contactsApi = {
  async getAll(): Promise<Page<ContactDto>> { return delay(300, pageify(getLS("crm_contacts", []))); },
  async search(): Promise<Page<ContactDto>> { return delay(300, pageify(getLS("crm_contacts", []))); },
  async filter(): Promise<Page<ContactDto>> { return delay(300, pageify(getLS("crm_contacts", []))); },
  async getById(): Promise<ContactDto> { return delay(300, getLS<ContactDto[]>("crm_contacts", [])[0]); },
  async create(data: ContactDto): Promise<ContactDto> { 
    const items = getLS<ContactDto[]>("crm_contacts", []);
    const saved = { ...data, id: Math.random().toString() };
    setLS("crm_contacts", [saved, ...items]);
    return delay(300, saved);
  },
  async update(id: string, data: ContactDto): Promise<ContactDto> {
    let items = getLS<ContactDto[]>("crm_contacts", []);
    items = items.map(i => i.id === id ? { ...data, id } : i);
    setLS("crm_contacts", items);
    return delay(300, { ...data, id });
  },
  async delete(id: string): Promise<void> {
    const items = getLS<ContactDto[]>("crm_contacts", []);
    setLS("crm_contacts", items.filter(i => i.id !== id));
    return delay(300, undefined);
  },
  async import(): Promise<void> { return delay(1000, undefined); },
  async bulkCreate(data: ContactDto[]): Promise<ContactDto[]> { 
    const items = getLS<ContactDto[]>("crm_contacts", []);
    const withIds = data.map(d => ({ ...d, id: Math.random().toString() }));
    setLS("crm_contacts", [...withIds, ...items]);
    return delay(1000, withIds); 
  },
};

export const companiesApi = {
  async getAll(): Promise<Page<CompanyDto>> { return delay(300, pageify(getLS("crm_companies", []))); },
  async search(): Promise<Page<CompanyDto>> { return delay(300, pageify(getLS("crm_companies", []))); },
  async getById(): Promise<CompanyDto> { return delay(300, getLS<CompanyDto[]>("crm_companies", [])[0]); },
  async create(data: CompanyDto): Promise<CompanyDto> {
    const items = getLS<CompanyDto[]>("crm_companies", []);
    const saved = { ...data, id: Math.random().toString() };
    setLS("crm_companies", [saved, ...items]);
    return delay(300, saved);
  },
  async update(id: string, data: CompanyDto): Promise<CompanyDto> {
    let items = getLS<CompanyDto[]>("crm_companies", []);
    items = items.map(i => i.id === id ? { ...data, id } : i);
    setLS("crm_companies", items);
    return delay(300, { ...data, id });
  },
  async delete(id: string): Promise<void> {
    const items = getLS<CompanyDto[]>("crm_companies", []);
    setLS("crm_companies", items.filter(i => i.id !== id));
    return delay(300, undefined);
  },
  async import(): Promise<void> { return delay(1000, undefined); },
  async bulkCreate(data: CompanyDto[]): Promise<CompanyDto[]> {
    const items = getLS<CompanyDto[]>("crm_companies", []);
    const withIds = data.map(d => ({ ...d, id: Math.random().toString() }));
    setLS("crm_companies", [...withIds, ...items]);
    return delay(1000, withIds); 
  },
};

export const leadsApi = {
  async getAll(): Promise<Page<LeadDto>> { return delay(300, pageify(getLS("crm_leads", []))); },
  async getById(): Promise<LeadDto> { return delay(300, getLS<LeadDto[]>("crm_leads", [])[0]); },
  async create(data: LeadDto): Promise<LeadDto> {
    const items = getLS<LeadDto[]>("crm_leads", []);
    const saved = { ...data, id: Math.random().toString() };
    setLS("crm_leads", [saved, ...items]);
    return delay(300, saved);
  },
  async update(id: string, data: LeadDto): Promise<LeadDto> {
    let items = getLS<LeadDto[]>("crm_leads", []);
    items = items.map(i => i.id === id ? { ...data, id } : i);
    setLS("crm_leads", items);
    return delay(300, { ...data, id });
  },
  async updateStatus(id: string, status: LeadStatus): Promise<LeadDto> { 
    let items = getLS<LeadDto[]>("crm_leads", []);
    let updated: LeadDto | null = null;
    items = items.map(i => {
      if (i.id === id) {
        updated = { ...i, status };
        return updated;
      }
      return i;
    });
    setLS("crm_leads", items);
    return delay(300, updated || items[0]); 
  },
  async delete(id: string): Promise<void> {
    const items = getLS<LeadDto[]>("crm_leads", []);
    setLS("crm_leads", items.filter(i => i.id !== id));
    return delay(300, undefined);
  },
  async getForTeam(): Promise<Page<LeadDto>> { return delay(300, pageify(getLS("crm_leads", []))); },
};

export const analyticsApi = {
  async getDashboard(): Promise<AnalyticsDto> {
    const contacts = getLS<ContactDto[]>("crm_contacts", []);
    const leads = getLS<LeadDto[]>("crm_leads", []);
    const activeContacts = contacts.filter(c => c.status === "ACTIVE").length;
    const wonLeads = leads.filter(l => l.status === "WON").length;
    const newLeads = leads.filter(l => l.status === "NEW").length;
    const openLeads = leads.filter(l => l.status !== "WON" && l.status !== "LOST").length;
    const totalPipeline = leads.reduce((sum, l) => sum + (l.value || 0), 0);
    const totalWon = leads.filter(l => l.status === "WON").reduce((sum, l) => sum + (l.value || 0), 0);
    
    // Fake status calculations for the charts
    const leadsByStatus: Record<string, number> = { "NEW": newLeads, "WON": wonLeads, "PROPOSAL": openLeads, "LOST": leads.length - wonLeads - openLeads };
    
    const dashboard: AnalyticsDto = {
      totalContacts: contacts.length,
      activeContacts,
      inactiveContacts: contacts.length - activeContacts,
      totalLeads: leads.length,
      newLeads,
      wonLeads,
      lostLeads: leads.length - wonLeads - openLeads,
      openLeads,
      totalPipelineValue: totalPipeline,
      totalWonValue: totalWon,
      conversionRate: leads.length ? Math.round((wonLeads / leads.length) * 100) : 0,
      leadsByStatus,
      leadsBySource: { "WEBSITE": 30, "REFERRAL": 40, "COLD_CALL": 20 },
      contactsByStatus: { "ACTIVE": activeContacts, "INACTIVE": contacts.length - activeContacts },
      totalUsers: 1 // Since it's demo
    };
    return delay(500, dashboard); 
  },
};

export const tasksApi = {
  async getDashboard(): Promise<TaskDto[]> { return delay(300, getLS("crm_tasks", [])); },
  async getVisible(): Promise<Page<TaskDto>> { return delay(300, pageify(getLS("crm_tasks", []))); },
  async getMy(): Promise<Page<TaskDto>> { return delay(300, pageify(getLS("crm_tasks", []))); },
  async getByTeam(): Promise<Page<TaskDto>> { return delay(300, pageify(getLS("crm_tasks", []))); },
  async getById(): Promise<TaskDto> { return delay(300, getLS<TaskDto[]>("crm_tasks", [])[0]); },
  async create(data: TaskDto): Promise<TaskDto> {
    const items = getLS<TaskDto[]>("crm_tasks", []);
    const saved = { ...data, id: Math.random().toString() };
    setLS("crm_tasks", [saved, ...items]);
    return delay(300, saved);
  },
  async update(id: string, data: TaskDto): Promise<TaskDto> {
    let items = getLS<TaskDto[]>("crm_tasks", []);
    items = items.map(i => i.id === id ? { ...data, id } : i);
    setLS("crm_tasks", items);
    return delay(300, { ...data, id });
  },
  async updateStatus(id: string, status: TaskStatus): Promise<TaskDto> { 
    let items = getLS<TaskDto[]>("crm_tasks", []);
    let updated: TaskDto | null = null;
    items = items.map(i => {
      if (i.id === id) {
        updated = { ...i, status };
        return updated;
      }
      return i;
    });
    setLS("crm_tasks", items);
    return delay(300, updated || items[0]);
  },
  async delete(id: string): Promise<void> {
    const items = getLS<TaskDto[]>("crm_tasks", []);
    setLS("crm_tasks", items.filter(i => i.id !== id));
    return delay(300, undefined);
  },
};

export const teamsApi = {
  async getAll(): Promise<Page<TeamDto>> { return delay(300, pageify(getLS("crm_teams", []))); },
  async getById(): Promise<TeamDto> { return delay(300, getLS<TeamDto[]>("crm_teams", [])[0]); },
  async create(data: TeamDto): Promise<TeamDto> {
    const items = getLS<TeamDto[]>("crm_teams", []);
    const saved = { ...data, id: Math.random().toString() };
    setLS("crm_teams", [saved, ...items]);
    return delay(300, saved);
  },
  async update(id: string, data: TeamDto): Promise<TeamDto> {
    let items = getLS<TeamDto[]>("crm_teams", []);
    items = items.map(i => i.id === id ? { ...data, id } : i);
    setLS("crm_teams", items);
    return delay(300, { ...data, id });
  },
  async delete(id: string): Promise<void> {
    const items = getLS<TeamDto[]>("crm_teams", []);
    setLS("crm_teams", items.filter(i => i.id !== id));
    return delay(300, undefined);
  },
  async addMember(): Promise<TeamDto> { return delay(300, getLS<TeamDto[]>("crm_teams", [])[0]); },
  async removeMember(): Promise<TeamDto> { return delay(300, getLS<TeamDto[]>("crm_teams", [])[0]); },
};

export const userApi = {
  async getMe(): Promise<UserProfile> { return delay(300, initialUser); },
  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> { return delay(300, { ...initialUser, ...data }); },
};
