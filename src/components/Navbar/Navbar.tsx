import Image from "next/image";
import { navbar, logo } from "./Navbar.css";
import { CtaButton } from "@/components/ui/Button/CtaButton";

export default function Navbar() {
  return (
    <nav className={navbar}>
      <Image
        src="/navbarLogo.svg"
        alt="Microsoft Logo"
        width={140}
        height={140}
        className={logo}
      />
      <CtaButton>Free Assessment</CtaButton>
    </nav>
  );
}
