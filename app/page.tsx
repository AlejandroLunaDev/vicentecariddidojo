import {
  Navbar,
  MobileMenu,
  Hero,
  HistorySection,
  Flag,
  InstructorsSection,
  ArticlesCarousel,
  ContactSection,
  Footer,
} from '@/features/landing'
export default function Home() {
  return (
    <main className='min-h-screen'>
      <MobileMenu />
      <Hero />
      <Navbar />
      <HistorySection />
      <Flag />
      <InstructorsSection />
      <ArticlesCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
