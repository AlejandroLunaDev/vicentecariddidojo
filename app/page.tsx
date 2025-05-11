import { Navbar } from "@/features/navigation/components/navbar"
import { Hero } from "@/features/hero/components/hero"
import { HistorySection } from "@/features/history/components/history-section"
import Flag from "@/features/flag/components/flag"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    <HistorySection />
    <Flag />
    </main>
  )
}
