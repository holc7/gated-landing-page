'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { contactSchema, ContactFormData, getFieldError } from '@/lib/validations/contact';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Button } from '@/components/ui/Button/Button';
import { CtaButton } from "@/components/ui/Button/CtaButton";
import {
  formContainer,
  formGrid,
  formActions,
  messageContainer,
  privacyNotice,
  linkStyle,
} from "./form.css";

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
    <div className={formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={formGrid}>
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

          <div style={{ gridColumn: "1 / -1" }}>
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
          <div className={messageContainer}>
            {formState === "success" && (
              <div style={{ color: "var(--colors-success-600)" }}>
                <CheckCircle size={20} aria-hidden="true" />
                <span>{submitMessage}</span>
              </div>
            )}
            {formState === "error" && (
              <div style={{ color: "var(--colors-error-600)" }}>
                <AlertCircle size={20} aria-hidden="true" />
                <span>{submitMessage}</span>
              </div>
            )}
          </div>
        )}

        <div className={privacyNotice}>
          <p>
            By submitting this form, you agree to our{" "}
            <a
              href="/privacy-policy"
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
              <ExternalLink size={14} aria-hidden="true" />
            </a>{" "}
            and{" "}
            <a
              href="/terms-of-service"
              className={linkStyle}
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

        <div className={formActions}>
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