import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { createContactService, handleServiceResponse, ContactServiceError } from '@/lib/services/activecampaign';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    
    // Validate the request body against our schema
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.errors.map(error => ({
            field: error.path.join('.'),
            message: error.message,
          })),
        },
        { status: 400 }
      );
    }

    const contactData = validationResult.data;

    // Create contact service instance
    const contactService = createContactService();

    // Try to create the contact
    const response = await contactService.createContact(contactData);

    // Handle the service response
    try {
      handleServiceResponse(response);
      
      return NextResponse.json(
        {
          success: true,
          message: 'Contact created successfully',
          contactId: response.contactId,
        },
        { status: 201 }
      );
    } catch (serviceError) {
      if (serviceError instanceof ContactServiceError) {
        return NextResponse.json(
          {
            success: false,
            message: serviceError.message,
            error: 'SERVICE_ERROR',
          },
          { status: serviceError.statusCode || 500 }
        );
      }
      throw serviceError;
    }

  } catch (error) {
    console.error('API Route Error:', error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON in request body',
          error: 'INVALID_JSON',
        },
        { status: 400 }
      );
    }

    // Handle other unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
      error: 'METHOD_NOT_ALLOWED',
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
      error: 'METHOD_NOT_ALLOWED',
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
      error: 'METHOD_NOT_ALLOWED',
    },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
      error: 'METHOD_NOT_ALLOWED',
    },
    { status: 405 }
  );
}