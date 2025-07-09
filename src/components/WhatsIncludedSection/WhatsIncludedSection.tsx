import React from "react";
import * as styles from "./WhatsIncludedSection.css";

export default function WhatsIncludedSection() {
  return (
    <section className={styles.section}>
      {/* Left: Steps */}
      <div className={styles.leftContent}>
        <h2 className={styles.title}>What's Included in the Assessment?</h2>
        <p className={styles.description}>
          This assessment will help you determine how ready your organisation is
          to adopt this next-gen platform and what steps to take to get there.
        </p>
        <ol className={styles.stepsList}>
          <li className={styles.stepItem}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Current State Review</div>
              <div className={styles.stepDescription}>
                We evaluate your existing data and analytics environment to
                understand where you are today.
              </div>
            </div>
            <div className={styles.clearFloat} />
          </li>
          <li className={styles.stepItem}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Readiness Analysis</div>
              <div className={styles.stepDescription}>
                We identify gaps and opportunities to help you align with
                Microsoft Fabric's architecture and capabilities.
              </div>
            </div>
            <div className={styles.clearFloat} />
          </li>
          <li className={styles.stepItem}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Tailored Next Steps</div>
              <div className={styles.stepDescription}>
                You receive clear, actionable recommendations to modernise your
                data estate and prepare for AI-powered insights.
              </div>
            </div>
            <div className={styles.clearFloat} />
          </li>
        </ol>
      </div>

      {/* Right: Form */}
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>
          Fill out the form to sign up for the assessment
        </h3>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.inputFull}
          />
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="Business Email"
              className={styles.inputHalf}
            />
            <input
              type="text"
              placeholder="Company Name"
              className={styles.inputHalf}
            />
          </div>
          <input
            type="text"
            placeholder="Job Title"
            className={styles.inputLast}
          />
          <button type="submit" className={styles.submitButton}>
            Get free assessment
          </button>
        </form>
      </div>
    </section>
  );
}
