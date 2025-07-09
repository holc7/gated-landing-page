"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardList } from "lucide-react";
import { z } from "zod";
import { CtaButton } from "@/components/ui/Button/CtaButton";
import * as styles from "./ContactForm.css";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
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

      setSubmitMessage("Thank you! We'll get back to you soon.");
      reset();
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer}>
        <ClipboardList className={styles.icon} />
        <h3 className={styles.title}>
          Fill out the form to sign up for the assessment
        </h3>
      </div>

      <p className={styles.urgencyText}>
        • Limited-time access - registration closes soon!
      </p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            {...register("name")}
            type="text"
            className={`${styles.input} ${
              errors.name ? styles.inputError : ""
            }`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Business Email</label>
            <input
              {...register("email")}
              type="email"
              className={`${styles.input} ${
                errors.email ? styles.inputError : ""
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Company Name</label>
            <input
              {...register("company")}
              type="text"
              className={`${styles.input} ${
                errors.company ? styles.inputError : ""
              }`}
              disabled={isSubmitting}
            />
            {errors.company && (
              <span className={styles.errorText}>{errors.company.message}</span>
            )}
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Job Title</label>
          <input
            {...register("jobTitle")}
            type="text"
            className={`${styles.input} ${
              errors.jobTitle ? styles.inputError : ""
            }`}
            disabled={isSubmitting}
          />
          {errors.jobTitle && (
            <span className={styles.errorText}>{errors.jobTitle.message}</span>
          )}
        </div>

        {submitMessage && <div className={styles.message}>{submitMessage}</div>}

        <p className={styles.privacyText}>
          By using this service, you agree to our Terms of Use and acknowledge
          our Privacy Policy. Please read these documents carefully to
          understand your rights and responsibilities.
        </p>

        <CtaButton type="submit" disabled={isSubmitting} fullWidth>
          {isSubmitting ? "Sending..." : "Get free assessment"}
        </CtaButton>
      </form>
    </div>
  );
}
