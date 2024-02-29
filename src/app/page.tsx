import Image from "next/image";
import Navbar from "@/components/UI/Navbar/Navbar";
import WhySection from "@/components/UI/WhySection/WhySection";
import HowSection from "@/components/UI/HowSection/HowSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhySection />
      <HowSection />
    </>
  );
}
