import VillaDetails from "../components/explore/VillaDetails";
interface PageProps {
  params: { villas: string }
}
export default async function VillasPage({ params }: { params: Promise<{ villas: string }> }) {
  // Await the promise to get the actual value
  const resolvedParams = await params;

  return (
    <VillaDetails params={resolvedParams} />
  );
}
