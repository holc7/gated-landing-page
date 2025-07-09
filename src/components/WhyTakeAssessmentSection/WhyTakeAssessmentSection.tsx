import React from "react";
import { RotateCcw, Plus, Zap } from "lucide-react";
import * as styles from "./WhyTakeAssessmentSection.css";

export default function WhyTakeAssessmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Take the Assessment?</h2>

        <p className={styles.description}>
          Whether you're just beginning your journey or already exploring
          Fabric, this personalised assessment helps identify gaps,
          opportunities, and the fastest path to unified, intelligent data.
        </p>

        <div className={styles.cardsGrid}>
          {/* FIRST CARD - COLLAPSED STATE */}
          <div className={styles.cardCollapsed}>
            <div className={styles.cardPlusLeft}>
              <Plus className={styles.plusIconLeft} />
            </div>
            <h3 className={styles.cardTitleSingleLine}>
              Clarity on Your Data Landscape
            </h3>
          </div>

          <div className={`${styles.card} ${styles.cardHighlighted}`}>
            <div className={styles.iconContainer}>
              <RotateCcw className={styles.icon} />
            </div>
            <div className={styles.cardPlus}>
              <Plus className={styles.plusIcon} />
            </div>
            <h3 className={styles.cardTitle}>
              Strategic Guidance from Experts
            </h3>
            <p className={styles.cardDescription}>
              Get expert insights tailored to your organisation's goals, helping
              you plan a smarter, faster path to modern analytics.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Zap className={styles.icon} />
            </div>
            <div className={styles.cardPlus}>
              <Plus className={styles.plusIcon} />
            </div>
            <h3 className={styles.cardTitle}>Accelerate AI Readiness</h3>
            <p className={styles.cardDescription}>
              Get expert insights tailored to your organisation's goals, helping
              you plan a smarter, faster path to modern analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
