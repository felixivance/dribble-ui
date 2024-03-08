import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Statistics from "@/components/Statistics/Statistics";
import EfficiencySection from "@/components/Efficiency/EfficiencySection";
import CTA from "@/components/CallToAction/CTA";
import GetStarted from "@/components/GetStarted/GetStarted";

export const metadata = {
  title: "MoniePoint - Dribble exercise",
  description: "Dribble design",
};

export default function Home() {
  return (
    <main className="">
      {/* header component */}
      <section>
        <Header />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Statistics />
      </section>
      <section>
        <EfficiencySection />
      </section>
      <section>
        <CTA />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
