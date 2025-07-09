import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),
  
  company: z
    .string()
    .min(1, 'Company is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .trim(),
  
  jobTitle: z
    .string()
    .min(1, 'Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must be less than 100 characters')
    .trim(),
  
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true; // Optional field
        // Remove all non-digit characters for validation
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message: 'Phone number must be between 10 and 15 digits',
      }
    )
    .transform((value) => {
      if (!value) return undefined;
      // Clean up the phone number format
      return value.trim();
    }),
  
  message: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true; // Optional field
        return value.length <= 1000;
      },
      {
        message: 'Message must be less than 1000 characters',
      }
    )
    .transform((value) => {
      if (!value) return undefined;
      return value.trim();
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Custom validation messages for better UX
export const validationMessages = {
  name: {
    required: 'Please enter your full name',
    tooShort: 'Name must be at least 2 characters long',
    tooLong: 'Name is too long (maximum 100 characters)',
    invalid: 'Name can only contain letters, spaces, hyphens, and apostrophes',
  },
  email: {
    required: 'Please enter your email address',
    invalid: 'Please enter a valid email address',
    tooLong: 'Email address is too long',
  },
  company: {
    required: 'Please enter your company name',
    tooShort: 'Company name must be at least 2 characters long',
    tooLong: 'Company name is too long (maximum 100 characters)',
  },
  jobTitle: {
    required: 'Please enter your job title',
    tooShort: 'Job title must be at least 2 characters long',
    tooLong: 'Job title is too long (maximum 100 characters)',
  },
  phone: {
    invalid: 'Please enter a valid phone number (10-15 digits)',
  },
  message: {
    tooLong: 'Message is too long (maximum 1000 characters)',
  },
};

// Helper function to get user-friendly error messages
export const getFieldError = (field: keyof ContactFormData, error: string): string => {
  const fieldMessages = validationMessages[field];
  if (!fieldMessages) return error;
  
  if (error.includes('required') && 'required' in fieldMessages) return fieldMessages.required || error;
  if ((error.includes('too short') || error.includes('at least')) && 'tooShort' in fieldMessages) return fieldMessages.tooShort || error;
  if ((error.includes('too long') || error.includes('less than')) && 'tooLong' in fieldMessages) return fieldMessages.tooLong || error;
  if ((error.includes('invalid') || error.includes('valid')) && 'invalid' in fieldMessages) return fieldMessages.invalid || error;
  
  return error;
};