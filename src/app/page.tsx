import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Features } from '@/sections/Features';
import { Testimonials } from '@/sections/Testimonials';
export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <Features></Features>
      <Testimonials></Testimonials>
    </main>
  );
}
