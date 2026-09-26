import { notFound } from "next/navigation";
import EditorialPage from "@/components/EditorialPage";
import { initiatives } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return initiatives.map((item) => ({ slug: item.slug }));
}

export default async function InitiativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = initiatives.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <EditorialPage item={item} />;
}
