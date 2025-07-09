// Footer.tsx

import React from "react";
import * as styles from "./Footer.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftText}>Company Name All rights reserved</div>

        <a href="/privacy" className={styles.rightText}>
          Privacy policy
        </a>
      </div>
    </footer>
  );
}
