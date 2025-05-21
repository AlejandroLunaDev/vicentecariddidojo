import { notFound } from 'next/navigation';
import data from '@/content/carroucel-data.json';
import InfoCardsPage from '@/features/landing/carroucel/pages/part1';

export default async function DynamicArticlePage({
  params
}: {
  params: { slug: string };
}) {
  const slug = await params.slug;

  // Mapeo de slug a índice de página
  const slugToPageIndex: Record<string, number> = {
    escuela: 0,
    maestro: 1,
    'karate-do': 2,
    alumno: 3,
    traje: 4,
    cinturon: 5
  };

  const pageIndex = slugToPageIndex[slug];

  if (pageIndex === undefined) {
    return notFound();
  }

  const page = data.pages[pageIndex];

  return <InfoCardsPage data={{ content: page }} />;
}
