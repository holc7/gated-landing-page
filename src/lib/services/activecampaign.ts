import { ContactFormData } from '../validations/contact';

export interface ContactServiceResponse {
  success: boolean;
  message: string;
  contactId?: string;
  error?: string;
}

export interface ContactService {
  createContact(data: ContactFormData): Promise<ContactServiceResponse>;
  updateContact(contactId: string, data: Partial<ContactFormData>): Promise<ContactServiceResponse>;
  getContact(email: string): Promise<ContactServiceResponse & { contact?: ContactFormData }>;
}

export class ActiveCampaignService implements ContactService {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl.replace(/\/$/, ''); // Remove trailing slash
    this.apiKey = apiKey;
  }

  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Api-Token': this.apiKey,
    };
  }

  async createContact(data: ContactFormData): Promise<ContactServiceResponse> {
    try {
      const contactData = {
        contact: {
          email: data.email,
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ').slice(1).join(' ') || '',
          phone: data.phone || '',
          orgname: data.company,
          // Custom fields can be added here based on your ActiveCampaign setup
          fieldValues: [
            {
              field: 'JOB_TITLE', // Replace with your actual field ID
              value: data.jobTitle,
            },
            {
              field: 'MESSAGE', // Replace with your actual field ID
              value: data.message || '',
            },
          ].filter(field => field.value), // Only include fields with values
        },
      };

      const response = await fetch(`${this.apiUrl}/api/3/contacts`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        message: 'Contact created successfully',
        contactId: result.contact?.id,
      };
    } catch (error) {
      console.error('ActiveCampaign API error:', error);
      return {
        success: false,
        message: 'Failed to create contact',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async updateContact(contactId: string, data: Partial<ContactFormData>): Promise<ContactServiceResponse> {
    try {
      const updateData = {
        contact: {
          ...(data.email && { email: data.email }),
          ...(data.name && { 
            firstName: data.name.split(' ')[0],
            lastName: data.name.split(' ').slice(1).join(' ') || '',
          }),
          ...(data.phone && { phone: data.phone }),
          ...(data.company && { orgname: data.company }),
        },
      };

      const response = await fetch(`${this.apiUrl}/api/3/contacts/${contactId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        message: 'Contact updated successfully',
        contactId,
      };
    } catch (error) {
      console.error('ActiveCampaign API error:', error);
      return {
        success: false,
        message: 'Failed to update contact',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async getContact(email: string): Promise<ContactServiceResponse & { contact?: ContactFormData }> {
    try {
      const response = await fetch(`${this.apiUrl}/api/3/contacts?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.contacts || result.contacts.length === 0) {
        return {
          success: false,
          message: 'Contact not found',
        };
      }

      const contact = result.contacts[0];
      
      return {
        success: true,
        message: 'Contact found',
        contactId: contact.id,
        contact: {
          name: `${contact.firstName} ${contact.lastName}`.trim(),
          email: contact.email,
          company: contact.orgname || '',
          jobTitle: '', // Would need to fetch from custom fields
          phone: contact.phone || undefined,
          message: undefined, // Would need to fetch from custom fields
        },
      };
    } catch (error) {
      console.error('ActiveCampaign API error:', error);
      return {
        success: false,
        message: 'Failed to get contact',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

export class MockActiveCampaignService implements ContactService {
  private contacts: Map<string, ContactFormData & { id: string }> = new Map();
  private nextId = 1;

  async createContact(data: ContactFormData): Promise<ContactServiceResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contactId = `mock_${this.nextId++}`;
        this.contacts.set(data.email, { ...data, id: contactId });
        
        console.log('Mock ActiveCampaign: Created contact', { contactId, data });
        
        resolve({
          success: true,
          message: 'Contact created successfully (mock)',
          contactId,
        });
      }, 500); // Simulate network delay
    });
  }

  async updateContact(contactId: string, data: Partial<ContactFormData>): Promise<ContactServiceResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingContact = Array.from(this.contacts.values()).find(c => c.id === contactId);
        
        if (!existingContact) {
          resolve({
            success: false,
            message: 'Contact not found (mock)',
            error: 'Contact not found',
          });
          return;
        }

        const updatedContact = { ...existingContact, ...data };
        this.contacts.set(updatedContact.email, updatedContact);
        
        console.log('Mock ActiveCampaign: Updated contact', { contactId, data });
        
        resolve({
          success: true,
          message: 'Contact updated successfully (mock)',
          contactId,
        });
      }, 500); // Simulate network delay
    });
  }

  async getContact(email: string): Promise<ContactServiceResponse & { contact?: ContactFormData }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contact = this.contacts.get(email);
        
        if (!contact) {
          resolve({
            success: false,
            message: 'Contact not found (mock)',
          });
          return;
        }

        const { id, ...contactData } = contact;
        
        console.log('Mock ActiveCampaign: Retrieved contact', { contactId: id, email });
        
        resolve({
          success: true,
          message: 'Contact found (mock)',
          contactId: id,
          contact: contactData,
        });
      }, 300); // Simulate network delay
    });
  }
}

// Service factory that switches based on environment
export function createContactService(): ContactService {
  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = process.env.ACTIVECAMPAIGN_API_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;

  if (isProduction && apiUrl && apiKey) {
    return new ActiveCampaignService(apiUrl, apiKey);
  } else {
    console.warn('Using mock ActiveCampaign service. Set ACTIVECAMPAIGN_API_URL and ACTIVECAMPAIGN_API_KEY environment variables for production.');
    return new MockActiveCampaignService();
  }
}

// Error handling class for better error management
export class ContactServiceError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'ContactServiceError';
  }
}

// Helper function to handle service responses
export function handleServiceResponse(response: ContactServiceResponse): void {
  if (!response.success) {
    throw new ContactServiceError(
      response.message,
      undefined,
      response.error ? new Error(response.error) : undefined
    );
  }
}