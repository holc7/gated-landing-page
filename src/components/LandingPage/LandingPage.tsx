import { CtaButton } from "../ui/Button/CtaButton";
import { main, headline, subheadline } from "./LandingPage.css";

export default function LandingPage() {
  return (
    <main className={main}>
      <h1 className={headline}>
        Assess Your Data Estate
        <br />
        for the Future of AI
      </h1>
      <p className={subheadline}>
        Get expert guidance to optimise your data estate
        <br />
        and prepare for AI with Microsoft Fabric.
      </p>
      <CtaButton>Get free assessment</CtaButton>
    </main>
  );
}
