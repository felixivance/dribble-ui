import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Statistics from "@/components/Statistics/Statistics";

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
        <Footer />
      </section>
    </main>
  );
}
