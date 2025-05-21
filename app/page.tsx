import { Navbar } from '@/features/navigation/components/navbar';
import { Hero } from '@/features/hero/components/hero';
import { HistorySection } from '@/features/history/components/history-section';
import Flag from '@/features/flag/components/flag';
import { InstructorsSection } from '@/features/instructors';
import { ContactSection } from '@/features/contact';
import { Footer } from '@/features/footer';
import { MobileMenu } from '@/features/navigation/components/mobile-menu';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <MobileMenu />
      <Hero />
      <Navbar />
      <HistorySection />
      <Flag />
      <InstructorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
