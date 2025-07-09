import React from "react";
import * as styles from "./WhatsIncludedSection.css";
import { ContactForm } from "../forms/ContactForm";

export default function WhatsIncludedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>What&apos;s Included in the Assessment?</h2>
          <p className={styles.description}>
            This assessment will help you determine how ready your organisation
            is to adopt this next-gen platform and what steps to take to get
            there.
          </p>
          <ol className={styles.stepsList}>
            <li className={styles.stepItem}>
              <div className={`${styles.stepNumber} ${styles.stepNumber01}`}>
                01
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Current State Review</div>
                <div className={styles.stepDescription}>
                  We evaluate your existing data and analytics environment to
                  understand where you are today.
                </div>
              </div>
            </li>
            <li className={styles.stepItem}>
              <div className={`${styles.stepNumber} ${styles.stepNumber02}`}>
                02
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Readiness Analysis</div>
                <div className={styles.stepDescription}>
                  We identify gaps and opportunities to help you align with
                  Microsoft Fabric&apos;s architecture and capabilities.
                </div>
              </div>
            </li>
            <li className={styles.stepItem}>
              <div className={`${styles.stepNumber} ${styles.stepNumber03}`}>
                03
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Tailored Next Steps</div>
                <div className={styles.stepDescription}>
                  You receive clear, actionable recommendations to modernise
                  your data estate and prepare for AI-powered insights.
                </div>
              </div>
            </li>
          </ol>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
