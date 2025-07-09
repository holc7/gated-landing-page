// WhatWeAssessSection.tsx

import React from "react";
import { Globe, BarChart3, Network, Shield, Zap } from "lucide-react";
import * as styles from "./WhatWeAssessSection.css";

export default function WhatWeAssessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        {/* RIGHT CONTENT - Assessment Areas */}
        <div className={styles.rightContent}>
          <ul className={styles.assessmentList}>
            <li className={styles.assessmentItem}>
              <div className={styles.iconContainer}>
                <Globe className={styles.icon} />
              </div>
              <span className={styles.assessmentText}>
                Data sources and architecture
              </span>
            </li>

            <li className={styles.assessmentItem}>
              <div className={styles.iconContainer}>
                <BarChart3 className={styles.icon} />
              </div>
              <span className={styles.assessmentText}>
                Analytics and reporting workflows
              </span>
            </li>

            <li className={styles.assessmentItem}>
              <div className={styles.iconContainer}>
                <Network className={styles.icon} />
              </div>
              <span className={styles.assessmentText}>
                Integration and data flow between systems
              </span>
            </li>

            <li className={styles.assessmentItem}>
              <div className={styles.iconContainer}>
                <Shield className={styles.icon} />
              </div>
              <span className={styles.assessmentText}>
                Security, governance, and compliance posture
              </span>
            </li>

            <li className={styles.assessmentItem}>
              <div className={styles.iconContainer}>
                <Zap className={styles.icon} />
              </div>
              <span className={styles.assessmentText}>
                Readiness for AI and Microsoft Fabric adoption
              </span>
            </li>
          </ul>
        </div>

        {/* LEFT CONTENT - Title, Description, Button */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>What We Assess?</h2>

          <p className={styles.description}>
            Take the guesswork out of modernisation. With the Microsoft Fabric
            Assessment, you'll get a clear view of your current data and
            analytics setup, and expert guidance on how to optimise it for an
            AI-powered future.
          </p>

          <button className={styles.startButton}>Start now</button>
        </div>
      </div>
    </section>
  );
}
