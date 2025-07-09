import Image from 'next/image';
import { navbar } from "./Navbar.css";
import { CtaButton } from "@/components/ui/Button/CtaButton";

export default function Navbar() {
  return (
    <div className={navbar}>
      <Image
        src="/navbarLogo.svg"
        alt="Microsoft Logo"
        width={140}
        height={140}
      />
      <CtaButton>Free Assessment</CtaButton>
    </div>
  );
}