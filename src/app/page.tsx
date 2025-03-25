import AboutSection from "@/components/about";
import { Feature } from "@/components/feature/feature";
import HeaderSection from "@/components/header";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <HeaderSection />
      <AboutSection />
      <Feature />
    </div>
  );
}
