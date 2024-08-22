import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Features } from '@/sections/Features';
import { Testimonials } from '@/sections/Testimonials';
import { Footer } from '@/sections/Footer';
import { CallToAction } from '@/sections/CallToAction';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <Features></Features>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
