import { Navbar } from '@/features/navigation/components/navbar';
import { Hero } from '@/features/hero/components/hero';
import { HistorySection } from '@/features/history/components/history-section';
import Flag from '@/features/flag/components/flag';
import { InstructorsSection } from '@/features/instructors';
import { ContactSection } from '@/features/contact';
import { Footer } from '@/features/footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <HistorySection />
      <Flag />
      <InstructorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
