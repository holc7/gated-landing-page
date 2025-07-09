'use client';

import { ContactForm } from "@/components/forms/ContactForm-simple";
import { ContactFormData } from "@/lib/validations/contact";

export default function Home() {
  const handleFormSuccess = (data: ContactFormData) => {
    console.log('Form submitted successfully:', data);
    // You can add additional success handling here
  };

  const handleFormError = (error: string) => {
    console.error('Form submission error:', error);
    // You can add additional error handling here
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem',
      backgroundColor: '#f9fafb'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          marginBottom: '1rem' 
        }}>
          Get in Touch
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#4b5563', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          We&apos;d love to hear from you! Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </header>
      
      <ContactForm 
        onSuccess={handleFormSuccess}
        onError={handleFormError}
      />
    </div>
  );
}