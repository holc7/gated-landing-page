import Image from 'next/image';
import { navbar, logoContainer, logoBox, logoText } from "./Navbar.css";
import { CtaButton } from "@/components/ui/Button/CtaButton";

export default function Navbar() {
  return (
    <div className={navbar}>
      {/* Microsoft logo placeholder */}
      <div className={logoContainer}>
        <div className={logoBox}>
          {/* Replace with actual logo if available */}
          <Image
            src="/window.svg"
            alt="Microsoft Logo"
            width={28}
            height={28}
          />
        </div>
        <span className={logoText}>Microsoft</span>
      </div>
      <CtaButton variant="secondary" size="md">
        Free Assessment
      </CtaButton>
    </div>
  );
} 