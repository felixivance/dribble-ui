import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "MoniePoint - Dribble exercise",
  description: "Dribble design"
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
      <Footer/>
     </section>

    </main>
  );
}
