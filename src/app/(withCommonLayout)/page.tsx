import About from "@/components/FrontPage/Home/About";
import Banner from "@/components/FrontPage/Home/Banner";
import BlogAndContact from "@/components/FrontPage/Home/BlogAndContact";
import Footer from "@/components/FrontPage/Home/Footer";
import Personal from "@/components/FrontPage/Home/Personal";
import Projects from "@/components/FrontPage/Home/Projects";
import Technology from "@/components/FrontPage/Home/Technology";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Technology />
      <Projects />
      <Personal />
      <BlogAndContact />
      <Footer />
    </div>
  );
}
