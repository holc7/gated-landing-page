'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { contactSchema, ContactFormData, getFieldError } from '@/lib/validations/contact';
import { Input } from '@/components/ui/Input/Input-simple';
import { Textarea } from '@/components/ui/Textarea/Textarea-simple';
import { CtaButton } from "@/components/ui/Button/CtaButton";

type FormState = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  onSuccess?: (data: ContactFormData) => void;
  onError?: (error: string) => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      message: "",
    },
  });

  const messageValue = watch("message");

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setFormState("success");
      setSubmitMessage(
        "Thank you for your message! We&apos;ll get back to you soon."
      );
      reset();
      onSuccess?.(data);
    } catch (error) {
      setFormState("error");
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setSubmitMessage(errorMessage);
      onError?.(errorMessage);
    }
  };

  const getFieldErrorMessage = (field: keyof ContactFormData) => {
    const error = errors[field];
    if (!error) return undefined;
    return getFieldError(field, error.message || "Invalid value");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Full Name"
            error={getFieldErrorMessage("name")}
            required
            {...register("name")}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />

          <Input
            label="Email Address"
            type="email"
            error={getFieldErrorMessage("email")}
            required
            {...register("email")}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />

          <Input
            label="Company"
            error={getFieldErrorMessage("company")}
            required
            {...register("company")}
            placeholder="Enter your company name"
            disabled={isSubmitting}
          />

          <Input
            label="Job Title"
            error={getFieldErrorMessage("jobTitle")}
            required
            {...register("jobTitle")}
            placeholder="Enter your job title"
            disabled={isSubmitting}
          />

          <Input
            label="Phone Number"
            type="tel"
            error={getFieldErrorMessage("phone")}
            {...register("phone")}
            placeholder="Enter your phone number (optional)"
            disabled={isSubmitting}
            helperText="Optional - we'll only call if necessary"
          />

          <div className="md:col-span-2">
            <Textarea
              label="Message"
              error={getFieldErrorMessage("message")}
              {...register("message")}
              placeholder="Tell us about your project or ask any questions (optional)"
              disabled={isSubmitting}
              autoResize
              showCharacterCount
              maxLength={1000}
              value={messageValue || ""}
              helperText="Optional - share any additional details"
            />
          </div>
        </div>

        {submitMessage && (
          <div
            className={`flex items-center gap-2 p-3 mb-6 rounded-md text-sm font-medium ${
              formState === "success"
                ? "bg-green-50 text-green-700 border-l-4 border-green-500"
                : "bg-red-50 text-red-700 border-l-4 border-red-500"
            }`}
          >
            {formState === "success" ? (
              <CheckCircle size={20} aria-hidden="true" />
            ) : (
              <AlertCircle size={20} aria-hidden="true" />
            )}
            <span>{submitMessage}</span>
          </div>
        )}

        <div className="mb-6 p-3 bg-gray-50 rounded-md border-l-4 border-gray-300">
          <p className="text-sm text-gray-600 leading-relaxed">
            By submitting this form, you agree to our{" "}
            <a
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
              <ExternalLink size={14} aria-hidden="true" />
            </a>{" "}
            and{" "}
            <a
              href="/terms-of-service"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            . We respect your privacy and will never share your information with
            third parties.
          </p>
        </div>

        <div className="flex justify-center">
          <CtaButton
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            fullWidth
            size="lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </CtaButton>
        </div>
      </form>
    </div>
  );
}