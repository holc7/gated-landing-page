// WhyTakeAssessmentSection.tsx

import React from "react";
import { RotateCcw, Plus, Zap, X } from "lucide-react";
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
          {/* FIRST CARD - Uses collapsedLayout */}
          <div className={`${styles.card} ${styles.collapsedLayout}`}>
            <svg
              className={styles.svgIconCollapsed}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="rotate(-105 25 25)">
                <path
                  d="M 43.78 31.84 A 20 20 0 0 1 18.17 43.78"
                  stroke="#0BA5EC"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 9.68 37.86 A 20 20 0 0 1 12.14 9.68"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 21.53 5.31 A 20 20 0 0 1 44.69 21.53"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <Plus className={styles.plusIconCollapsed} />
            <h3 className={styles.titleCollapsed}>
              Clarity on Your Data Landscape
            </h3>
          </div>

          {/* SECOND CARD - Uses expandedLayout */}
          <div
            className={`${styles.card} ${styles.cardHighlighted} ${styles.expandedLayout}`}
          >
            {/* TOP ITEM */}
            <svg
              className={styles.svgIconExpanded}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="rotate(-105 25 25)">
                <path
                  d="M 43.78 31.84 A 20 20 0 0 1 18.17 43.78"
                  stroke="#0BA5EC"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 9.68 37.86 A 20 20 0 0 1 12.14 9.68"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 21.53 5.31 A 20 20 0 0 1 44.69 21.53"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            {/* BOTTOM ITEM */}
            <div>
              <X className={styles.closeIconExpanded} />
              <h3 className={styles.cardTitle}>
                Strategic Guidance from Experts
              </h3>
              <p className={styles.cardDescription}>
                Get expert insights tailored to your organisation's goals,
                helping you plan a smarter, faster path to modern analytics.
              </p>
            </div>
          </div>

          {/* THIRD CARD - Uses defaultLayout */}
          <div className={`${styles.card} ${styles.defaultLayout}`}>
            <div className={styles.iconContainerDefault}>
              <Zap className={styles.lucideIcon} />
            </div>
            <Plus className={styles.plusIconDefault} />
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
