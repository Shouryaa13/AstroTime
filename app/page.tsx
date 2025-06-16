import Header from '@/components/Home/header';
import Hero from '@/components/Home/hero';
import ComponentStore from '@/components/Home/stone';
import Services from '@/components/Home/services';
import Footer from '@/components/Home/footer';
import News from '@/components/Home/blog';
import Review from '@/public/hero/testimonial';
import Experts from '@/components/Home/astro';  
import AboutAstrologer from '@/components/Home/about';
import Rashi from '@/components/Home/Rashistone';
import Achievements from '@/components/Home/achivment';
import Blog from '@/components/Home/blog';
import FAQ from '@/components/Home/FAQ';

export default function Home() {
  return (
      <>
      <Header/>
      <Hero />
      <Services/>
      <AboutAstrologer/>
      <Achievements/>

      <Rashi/>
      {/* <ComponentStore/> */}
      {/* <Gems/> */}
      {/* <Magic/> */}
      {/* <Experts/> */}
      <Review/>
      <Blog/>
      <FAQ/>
      <Footer/>
    </>
  );
}